const tf = require('@tensorflow/tfjs-node');
const InputError = require('../exceptions/InputError');

const loadAndPrepareImage = async (imageBuffer, targetSize = [150, 150]) => {
  try {
    const tensor = tf.node
      .decodeImage(imageBuffer, 3)  
      .resizeNearestNeighbor(targetSize)
      .expandDims()
      .toFloat()
      .div(tf.scalar(255.0));  
    return tensor;
  } catch (error) {
    throw new InputError('An error occurred during image preprocessing: ' + error.message);
  }
};


const makePrediction = async (model, tensor, classIndices) => {
  try {
    const prediction = model.predict(tensor);
    const predictionData = await prediction.data();

    const predictedIndex = predictionData.indexOf(Math.max(...predictionData));

    
    const predictedClass = Object.keys(classIndices)[predictedIndex];

    
    if (!predictedClass) {
      throw new InputError('Prediction failed to map to any class.');
    }

    return { predictedClass };
  } catch (error) {
    console.error('Error making prediction:', error);
    if (error instanceof InputError) {
      throw new InputError('Prediction error: ' + error.message);
    } else {
      throw new Error('Unexpected error occurred during prediction: ' + error.message);
    }
  }
};

module.exports = { loadAndPrepareImage, makePrediction };