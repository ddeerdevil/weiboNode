const seq = require('../seq')
const { INTERGER, TEXT, STRING } = require('../types')

const Blog = seq.define('blog', {
    userId: {
        type: INTERGER,
        allowNull: false,
        comment: '用户Id'
    },
    content: {
        type: TEXT,
        allowNull: false,
        comment: '内容'
    },
    image: {
        type: STRING,
        comment: '图片地址'
    }
})

module.exports = Blog