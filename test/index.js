var add  = require('../src/add.js')
var expect = require('chai').expect

describe('加法函数测试',()=>{
    it('1 加 1 应该等于 2',()=>{
        expect(add(1,1)).to.be.equal(2)
    })
    it('返回的值应该为number类型',()=>{
        expect(add(1,2)).to.be.a('number')
    })
    it('字符串a 加 数字3 应该等于a3',()=>{
        expect(add('a',3)).to.be.equal('a3')
    })
    it('如果有一个参数为字符串,返回值也是字符串类型',()=>{
        expect(add('a',3)).to.be.a('string')
    })
    it('add 应该是一个函数',()=>{
        expect(add).to.be.a('function')
    })
    it('任何数和0相加应该等于其本身',()=>{
        let n = parseInt(Math.random()*1000)
        expect(add(n,0)).to.be.equal(n)
    })
    it('返回值是否为真',()=>{
        expect(add(1,0)).to.be.ok
    })
    it('返回值是否为假',()=>{
        expect(add(0,0)).to.be.not.ok
    })
})