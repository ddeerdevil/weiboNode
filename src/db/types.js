/**
 * @description 封装 Sequelize数据类型
 * @author dc酱
 */

const Sequelize = require('sequelize');

module.exports = {
    STRING: Sequelize.STRING,
    TEXT: Sequelize.TEXT,
    DECIMAL: Sequelize.DECIMAL,
    INTERGER: Sequelize.INTEGER,
    BOOLEAN: Sequelize.BOOLEAN
}