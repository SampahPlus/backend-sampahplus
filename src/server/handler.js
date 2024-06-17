const fs = require('fs');
const { loadAndPrepareImage, makePrediction } = require('../services/inferenceServices');
const InputError = require('../exceptions/InputError');
const services = require('../services/dbServices');

const postPredictHandler = async (request, h) => {
  const { email } = request.payload;
  const { model, classIndices } = request.server.app;
  const image = request.payload.image;

  try {
    if (!image) {
      throw new InputError('No image file provided');
    }

    // Log image details
    console.log('Image details:', image);

    // Check if the image path is defined
    if (!image.path) {
      throw new InputError('Image path is not defined');
    }

    // Read the image buffer
    const imageBuffer = fs.readFileSync(image.path);

    // Preprocess the image and make prediction
    const tensor = await loadAndPrepareImage(imageBuffer);
    const { predictedClass } = await makePrediction(model, tensor, classIndices);

    if (!predictedClass) {
      throw new InputError('Prediction failed to map to any class.');
    }

    const createdAt = new Date().toISOString();
    const results = await services.getDataByNamaSampah(predictedClass);

    // Insert history data
    await services.postDataHistory(email, results.category.id_sampah, createdAt);

    return h.response({
      status: 'success',
      message: 'Berhasil Prediksi Sampah',
      label: predictedClass,
      results,
    }).code(201);
  } catch (error) {
    console.error('Error in postPredictHandler:', error);
    return h.response({
      status: 'fail',
      message: 'Unexpected error occurred: ' + error.message,
    }).code(500);
  }
};

const getPredictHistoriesHandler = async (request, h) => {
  const { email } = request.payload;

  try {
    const histories = await services.getDataHistory(email);
    return h.response({
      status: 'success',
      histories,
    }).code(200);
  } catch (error) {
    console.error('Error in getPredictHistoriesHandler:', error);
    return h.response({
      status: 'fail',
      message: 'Unexpected error occurred',
    }).code(500);
  }
};

const getDataUi = async (request, h) => {
  try {
    const results = await services.getDataUi();
    return h.response({
      status: 'success',
      results
    }).code(200);
  } catch (err) {
    console.error('Error executing query:', err);
    return h.response('Error executing query').code(500);
  }
};

const getDataByIdSampah = async (request, h) => {
  try {
    const results = await services.getDataByIdSampah(request.params.id_sampah);
    if (!results.category) {
      return h.response('Data not found').code(404);
    }
    return h.response({
      status: 'success',
      results
    }).code(200);
  } catch (err) {
    console.error('Error executing query:', err);
    return h.response('Error executing query').code(500);
  }
};

module.exports = { postPredictHandler, getPredictHistoriesHandler, getDataUi, getDataByIdSampah };
