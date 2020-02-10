function litres(time) {
  return Math.floor(time * 0.5)
}

Test.describe('Fixed tests', _ => {
  Test.it('Tests', _ => {
    Test.assertEquals(litres(2), 1, 'should return 1 litre')
    Test.assertEquals(litres(1.4), 0, 'should return 0 litres')
    Test.assertEquals(litres(12.3), 6, 'should return 6 litres')
    Test.assertEquals(litres(0.82), 0, 'should return 0 litres')
    Test.assertEquals(litres(11.8), 5, 'should return 5 litres')
    Test.assertEquals(litres(1787), 893, 'should return 893 litres')
    Test.assertEquals(litres(0), 0, 'should return 0 litres')
  })
})

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n
}

Test.assertEquals(getRealFloor(1), 0)
Test.assertEquals(getRealFloor(5), 4)
Test.assertEquals(getRealFloor(15), 13)
