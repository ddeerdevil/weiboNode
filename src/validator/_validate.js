/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-10-26 20:23:03
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-10-26 20:26:11
 */
/**
 * @description json schema 校验
 * @author dc酱
 */

const Ajv = require('ajv');
const ajv = new Ajv({
    allErrors: true
})

/**
 * json schema 校验
 * @param {Object} schema
 * @param {Object} [data={}]
 * @returns
 */
function validate(schema, data = {}) {
    const valid = ajv.validate(schema, data)
    if (!valid) {
        return ajv.errors[0]
    }
}

module.exports = validate;