
/**
 * @description blog 校验
 * @author dc酱
 */

const validate = require('./_validate'); 
 
// 校验规则
const SCHEMA = {
    type: 'object',
    properties: {
        content: {
            type: 'string'
        },
        image: {
            type: 'string',
            maxLength: 255
        }
    }
}

// 执行校验
function blogValidate(data = {}) {
    return validate(SCHEMA, data);
}

module.exports = blogValidate;