/**
 * @description test demo
 * @author sorrycc
 */

function sum(a, b) {
    return a + b;
}

test('10 + 20 = 30', () => {
    const res = sum(10, 20);
    expect(res).not.toBe(40);
})