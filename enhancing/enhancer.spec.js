const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  const item1 = {
    name: "Iron Sword",
    durability: 30,
    enhancement: 0
  }

  const item2 = {
    name: "Barbed Spear",
    durability: 70,
    enhancement: 20
  }

  describe('repair', () => {
    it('should raise durability to 100', () => {
      expect(repair(item1)).toHaveProperty('durability', 100);
    })
  })

  describe('succeed', () => {
    it('should increase enhancement by 1', () => {
      expect(succeed(item1)).toHaveProperty('enhancement', 1)
    })

    it('should not increase enhancement above level 20', () => {
      expect(succeed(item2)).toHaveProperty('enhancement', 20)
    })

    it('should not modify durability', () => {
      expect(succeed(item1)).toHaveProperty('durability', 30)
      expect(succeed(item2)).toHaveProperty('durability', 70)
    })
  })
})