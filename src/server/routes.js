const {
  postPredictHandler,
  getPredictHistoriesHandler,
  getDataByIdSampah
} = require("../server/handler");
const { getDataUi } = require("../services/dbServices");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 1000 * 1000,
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
