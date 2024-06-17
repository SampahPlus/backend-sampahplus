const classIndices = {
  'Baterai': 'classA',
  'Botol Kaca': 'classB',
  'Botol Plastik': 'classC',
  'Cangkir': 'classD',
  'Elektronik': 'classE',
  'Kertas': 'classF',
  'Kotak': 'classG',
  'Organik': 'classH',
  'Pakaian': 'classI',
  'Plastik': 'classJ',
  'Sampah non olah': 'classK',
  'Sepatu': 'classL'
}
const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const loadModel = require("../services/loadModel");
const InputError = require("../exceptions/InputError");
require("dotenv").config();

const initServer = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8081,
    host: "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  try {
    const model = await loadModel();
    server.app.model = model;
    server.app.classIndices = classIndices;
  } catch (error) {
    console.error("Error loading model:", error);
    process.exit(1);
  }

  server.route(routes);

  server.ext("onPreResponse", (request, h) => {
    const response = request.response;

    if (response instanceof InputError) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response.isBoom) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.output.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server started at: ${server.info.uri}`);
};

initServer();