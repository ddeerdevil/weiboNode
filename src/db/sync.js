/**
 * @description sequelize 同步
 * @author sorrycc
 */

const seq = require('./seq');

require('./model/index')

seq.authenticate().then(() => {
    console.log('auth ok');
}).catch(() => {
    console.log('auth fail');
})

seq.sync({ force: true }).then(() => {
    console.log('sync ok');
    process.exit();
});