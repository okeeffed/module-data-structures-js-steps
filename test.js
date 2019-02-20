const lib = require('./index');
// const mocha = require('mocha');
const chai = require('chai');
const {expect} = chai;
describe('create steps', function () {
    it('basic steppers 3', function () {
        let exp = `#  \n## \n###`;
        let res = lib.step(3);
        expect(exp)
            .to
            .equal(res);
    });

    it('basic steppers 5', function () {
        let exp = `#\n##\n###\n####\n#####`;
        let res = lib.step(5);
        expect(exp)
            .to
            .equal(res);
    });

    it('basic steppers 0', function () {
        let exp = '';
        let res = lib.step(0);
        expect(exp)
            .to
            .equal(res);
    });

    it('basic steppers 1', function () {
        let exp = '#';
        let res = lib.step(1);
        expect(exp)
            .to
            .equal(res);
    });
});