var express = require('express'),
  app = exports.app = express(),
  path = require('path');
//require('waitfor');
app.get('/api', function (req, res) {
  res.send('Bowling Game API is running');
});

app.get('/start', function (req, res) {
  results = new Array(21);
  for(var i = 0; i < 21; i++) {
  	results[i] = 0;
  }
  attempt = 0;
  //res.send('Started');
});

app.get('/bowl/:pins/:ball', function (req, res) {
  var ball = parseInt(req.params.ball);
  results[ball] = parseInt(req.params.pins);

  //console.log("ball:"+ball + ":" +results[ball]);
  attempt++;
  if(results[ball] == 10)attempt++;

});

app.get('/score', function (req, res) {
  var total = 0;
  var ball = 0;
  var bowlFrames = [] ;
  if (attempt < 19) {//console.log("attempt:" +attempt);

    res.sendStatus(404);
    return;
   }
  for(var frame=0; frame<10; frame++) {
    //ball = frame *2;
  	total += results[ball] + results[ball+1];
  	if (results[ball] == 10) {
  		total += results[ball+2];
      //console.log("strike score" + ball + " :: "+ total + " :: " + results[ball]);
  		ball++
  	} else {
	  	if (results[ball] + results[ball+1] == 10) {
	  		total += results[ball+2];
	  	}
      //console.log("score" +ball + " : " + total+ " :: "+ results[ball]);
	  	ball += 2;
	  }

       bowlFrames.push({
         id: frame,
         title: ball,
         text: results[ball]
       });
  }
  var result = { score: total };
  //result += bowlFrames;
  res.json(result);
});

// Application
app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 3000);
