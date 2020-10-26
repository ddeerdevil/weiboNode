/**
 * @description 测试user model
 * @author dc酱
 */


const { User } = require('../../src/db/model/index');

test('User 的各个属性', () => {
    const user = User.build({
        userName: 'zhangsan',
        password: 'p123123',
        nickName: '张三',
        picture: 'xxx.png',
        city: 'beijing'
    })

    expect(user.userName).toBe('zhangsan');
    expect(user.password).toBe('p123123');
    expect(user.nickName).toBe('张三');
    expect(user.gender).toBe(3);
    expect(user.picture).toBe('xxx.png');
    expect(user.city).toBe('beijing');
})