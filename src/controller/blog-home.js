const { SuccessModel, ErrorModel } = require('../model/ResModel')
const {
    createBlog
} = require('../services/blog')
const {
    createBlogFailInfo
} = require('../model/ErrorInfo')
const xss = require('xss')

/**
 * 创建微博
 * @param {Object} dasdas { userId, content, image }
 */
async function create({ userId, content, image }) {
    //service
    try {
        const blog = await createBlog({
            userId,
            content: xss(content),
            image 
        })
        return new SuccessModel(blog)
    } catch(ex) {
        return new ErrorModel(createBlogFailInfo)
    }
}

module.exports = {
    create
}