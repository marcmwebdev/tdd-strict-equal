const { expect } = require('chai')
const { it, describe } = require('mocha')
const { notEqual }  = require('../index')



  describe('Comparisons', () => {

    it('should return true when comparing 2 numbers', () => {
      const val1 = 10
      const val2 = 10
      const result = notEqual(val1, val2)


      expect(result).to.equal(true)
    })

    it('should return false when comparing number and a string', () => {
      const val1 = 10
      const val2 = '10'
      const result = notEqual(val1, val2)


      expect(result).to.equal(false)
    })
  })
