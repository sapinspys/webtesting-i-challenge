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

  const item3 = {
    name: "Spiked Club",
    durability: 70,
    enhancement: 16
  }

  
  const item4 = {
    name: "Rusty Halberd",
    durability: 5,
    enhancement: 10
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

  describe('fail', () => {
    it('should decrease enhancement by 5 if enhancement level is less than 15', () => {
      expect(fail(item4)).toHaveProperty('enhancement', 5)
    })

    it('should decrease enhancement by 10 if enhancement level is 15 or 16', () => {
      expect(fail(item3)).toHaveProperty('enhancement', 6)
    })

    it('should decrease enhancement by 1 if enhancement level is more than 16', () => {
      expect(fail(item2)).toHaveProperty('enhancement', 19)
    })

    it('should break an item if it goes below 0', () => {
      expect(fail(item1)).toMatch(`Your ${item1.name} has broken...`)
    })

    it('should not modify durability', () => {
      expect(succeed(item1)).toHaveProperty('durability', 30)
      expect(succeed(item2)).toHaveProperty('durability', 70)
    })
  })
})