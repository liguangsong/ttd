describe("create  a four-digit random number", function() {
  var count;


  beforeEach(function() {
    count = create_count();
  });
  afterEach(function(){
      clear();
    });

    it("should a four-digit ", function() {
    expect(count.length).toBe(4);
  });
    it("should a number ", function() {
        expect(isNaN(count)).toBe(false);
    });
  it("should not have repeat number ",function(){
     var status=is_or_no_repeat(count);
     expect(status).toBe("no")
    });
  it("should be random",function(){
     var status=random_test(1000);
      expect(status).toBe(true);
  })

});