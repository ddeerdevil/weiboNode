const { TestScheduler } = require('jest')
const { Blog } = require('../../src/db/model')

test('123', () => {
    const blog = Blog.build({
        userId: 1,
        content: '12121',
        image: ''
    })
    expect(blog.userId).toBe(1)
    expect(blog.content).toBe('12121')
    expect(blog.image).toBe('')
})