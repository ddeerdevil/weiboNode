/**
 * @description 校验中间件
 * @author dc酱
 */
const { ErrorModel } = require('../model/ResModel');
const { jsonSchemaFailInfo } = require('../model/ErrorInfo');

function genValidator(validateFn) {
    async function validator(ctx, next) {
        const data = ctx.request.body;
        const error = validateFn(data);
        if (error) {
            ctx.body = new ErrorModel(jsonSchemaFailInfo);
            return
        }
        await next();
    }
    return validator;
}

module.exports = genValidator;