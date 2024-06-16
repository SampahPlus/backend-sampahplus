const tf = require("@tensorflow/tfjs-node");
require('dotenv').config();

const loadModel = async () => {
  try {
    const modelUrl = process.env.MODEL_URL ;
    if (!modelUrl) {
      throw new Error("MODEL_URL environment variable is not set.");
    }
    console.log(`Loading model from ${modelUrl}`);
    const model = await tf.loadLayersModel(modelUrl);
    console.log("Model loaded successfully.");
    return model;
  } catch (error) {
    console.error(`Failed to load model from ${modelUrl}: ${error.message}`);
    throw new Error(`Failed to load model from ${modelUrl}: ${error.message}`);
  }
};

module.exports = loadModel;
