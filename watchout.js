// start slingin' some d3 here.
  var gameOptions = {
    height: window.innerHeight,
    width: window.innerWidth,
    numberEnemies: 30,
    duration: 1500,
    padding: 20,
    r: 30
  };

  var gameStats = {
    score: 0,
    highScore: 0,
    collisions: 0
  };

  var player = {
    x: gameOptions.width/2,
    y: gameOptions.height/2
  }

  var updateStats = function() {
    d3.select('#current-score').text(gameStats.score.toString());
    d3.select('#high-score').text(gameStats.highScore.toString());
    d3.select('#collisions').text(gameStats.collisions.toString());
  };
  // updateStats();

  var pixelize = function(number){
    return number + 'px';
  };

  var rand = function(n){
    return Math.floor( Math.random() * n );
  };
  var randX = function(){
    return pixelize( rand(gameOptions.width-gameOptions.r*2) );
  };
    var randY = function(){
    return pixelize( rand(gameOptions.height-gameOptions.r*2) );
  };

  var gameBoard = d3.select('.field')
    .style({
      height: pixelize(gameOptions.height),
      width: pixelize(gameOptions.width)
    });

  d3.select('.player').style({
    top: pixelize(player.x),
    left: pixelize(player.y),
    width: pixelize(gameOptions.r*2),
    height: pixelize(gameOptions.r*2),
    'background-size': pixelize(gameOptions.r*2)
    });

  var asteroids = gameBoard.selectAll('.asteroid')
  .data(d3.range(gameOptions.numberEnemies))
  .enter().append('div')
  .attr('class', 'asteroid')
  .style({
    top: randY,
    left: randX
  })

  gameBoard.on('mousemove', function(){
    var loc = d3.mouse(this);
    player = {
      x: loc[0],
      y: loc[1] // adjust for mouse positioning
    };
    d3.select('.player').style({
      top: pixelize(player.y),
      left: pixelize(player.x)
    })
  });

var move = function(element){
  element.transition().duration(gameOptions.duration).style({
    top: randY,
    left: randX
  }).each('end', function(){
    move( d3.select(this));
  });
};

move(asteroids);

var scoreTicker = function(){
  gameStats.score = gameStats.score+1;
  gameStats.highScore = Math.max(gameStats.score, gameStats.highScore);
  updateStats();
};
setInterval(scoreTicker, 100);
 var prevCollision = false;
var detectCollisions = function(){
  var collision = false;

  asteroids.each(function(){
    var cy = this.offsetLeft + gameOptions.r;
    var cx = this.offsetRifth + gameOptions.r;
    var x = cx - player.x;
    var y = cy - player.y;
    if ( Math.sqrt(x*x + y*y) < gameOptions.r*2 ){
      collision = true;
    }
  });

  if (collision) {
    score = 0;
    //gameBoard.style('background-color', 'red');
    if( prevCollision != collision){
      gameStats.collision = gameStats.collision + 1;

    }else{
      //gameBoard.style('background-image', ???);
    }
  }
  prevCollision = collision;
};

d3.timer(detectCollisions);















