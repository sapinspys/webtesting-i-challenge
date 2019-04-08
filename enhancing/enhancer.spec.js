const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
  const item = {
    name: "Iron Sword",
    durability: 30,
    enhancement: 0
  }

  describe('repair', () => {
    it('should raise durability to 100', () => {
      expect(repair(item).durability).toBe(100);
    })
  })
})