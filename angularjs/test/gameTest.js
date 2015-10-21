var request = require('supertest'),
	should = require('should'),
	game = require('../game.js').app;

describe('API', function() {
    it('should return', function(done) {
        request(game).get('/api').expect(200, done);                      
    });
});

var roll = function(pins, frame) {
	//for(var j=0;j<10;j++) {

	//}
	request(game).get('/bowl/' + pins+ "/" + frame).end();

}

var roll1 = function(pins) {
	request(game).get('/bowl/' + pins).expect(200, function(err,res) {
		if (err) return done(err);
		 frames = res.body;
		done();
	});
}
var rollMany = function(times, pins, frame) {
	var f = frame
	for(var i=0;i<times;i++) {

		roll(pins, f++);
	}
}

var assertScoreEquals = function(expected, done) {   
    request(game).get('/score').expect(200, function(err,res) {
      if (err) { //console.log("error" + err.toString());
		  assertScoreEquals(expected, done)
		  return true; // done(err);
	  }
      result = res.body;
	//console.log(result);
		result.should.have.property('score').eql(expected);
      done();      
    });  
};

describe('in a game of bowling, ', function() {
	beforeEach(function() {
		request(game).get('/start').end();

  	});

	describe('gutter game', function() {
	    it('should return 0', function(done) {
	    	rollMany(20,0,0);
	    	assertScoreEquals(0, done);
	    });
	});

	describe('single pin game', function() {
	    it('should return 20', function(done) {
	    	rollMany(20,1,0);
	        assertScoreEquals(20, done);                     
	    });
	});

	describe('one spare game', function() {
	    it('should return 16', function(done) {
	    	roll(4,0);
	    	roll(6,1); //spare
	    	roll(3,2);
	    	rollMany(17,0,3);
	        assertScoreEquals(16, done);                    
	    });
	});

	describe('one strike game', function() {
	    it('should return 28', function(done) {
	    	roll(10,0); //strike
	    	roll(6,1);
	    	roll(3,2);
	    	rollMany(17,0,3);
	        assertScoreEquals(28, done);                    
	    });
	});

	describe('perfect game', function() {
	    it('should return 300', function(done) {
	    	rollMany(12,10,0);
	        assertScoreEquals(300, done);                    
	    });
	});
});