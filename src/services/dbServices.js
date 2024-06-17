const mysql = require('mysql');
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('MySQL Connected...');
});

const queryDb = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const getDataByNamaSampah = async (predictedClass) => {
    let sqlCategory = 'SELECT * FROM category_sampah WHERE nama_sampah = ?';
    const categoryResults = await queryDb(sqlCategory, [predictedClass]);

    if (categoryResults.length === 0) {
        return { category: null, recommendations: [] };
    }

    const id_sampah = categoryResults[0].id_sampah;
    let sqlRecommendations = 'SELECT * FROM recomendasi_sampah WHERE id_sampah = ?';
    const recommendationResults = await queryDb(sqlRecommendations, [id_sampah]);

    return {
        category: categoryResults[0],
        recommendations: recommendationResults
    };
};

const getDataUi = () => {
    let sql = 'SELECT * FROM sampahplus_knowladge';
    return queryDb(sql);
};

const postDataHistory = (email, id_sampah) => {
    let sql = 'INSERT INTO `history`(`email`, `id_sampah` ) VALUES (?, ?)';
    return queryDb(sql, [email, id_sampah]);
};

const getDataHistory = async (email) => {
    let sqlHistory = `
        SELECT h.*, c.*
        FROM history h
        INNER JOIN category_sampah c ON h.id_sampah = c.id_sampah
        WHERE h.email = ?
    `;
    const historyResults = await queryDb(sqlHistory, [email]);

    if (historyResults.length === 0) {
        return { user: null, history: [] };
    }

    return {
        user: historyResults[0].email,
        history: historyResults
    };
};
const getDataByIdSampah = async (id_sampah) => {
    let sqlCategory = 'SELECT * FROM category_sampah WHERE id_sampah = ?';
    const categoryResults = await queryDb(sqlCategory, [id_sampah]);

    if (categoryResults.length === 0) {
        return { category: null, recommendations: [] };
    }
    let sqlRecommendations = 'SELECT * FROM recomendasi_sampah WHERE id_sampah = ?';
    const recommendationResults = await queryDb(sqlRecommendations, [id_sampah]);

    return {
        category: categoryResults[0],
        recommendations: recommendationResults
    };
};

module.exports = {
    getDataByNamaSampah,
    getDataUi,
    postDataHistory,
    getDataHistory,
    getDataByIdSampah
};
