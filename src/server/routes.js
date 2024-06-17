const {
  postPredictHandler,
  getPredictHistoriesHandler,
  getDataByIdSampah,
  getDataUi
} = require("../server/handler")

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        maxBytes: 10485760, // 10 MB
        output: 'file',
        parse: true,
        multipart: true, // Ensure this is set to handle multipart
        allow: 'multipart/form-data'
      },
    },
  },
  {
    path: "/histories",
    method: "POST",
    handler: getPredictHistoriesHandler,
    options: {
      payload: {
        allow: ['application/json'],
        parse: true,
      },
    },
  },
  { 
    method: 'GET', 
    path: '/knowledge', 
    handler: getDataUi 
  },
  { 
    method: 'GET', 
    path: '/getData/{id_sampah}', 
    handler: getDataByIdSampah 
  },
];

module.exports = routes;
