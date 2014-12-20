// start slingin' some d3 here.
(function(){
  var gameOptions, gameStats, axes, gameBoard, updateScore, updateHighScore,
    Player, createEnemies, render, enemy, startPosition, endPosition;

  gameOptions = {
    height: 450,
    width: 700,
    numberEnemies: 30,
    padding: 20
  };

  gameStats = {
    score: 0,
    highScore: 0,
    collisions: 0
  };

  axes = {
    x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
    y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
  };

  gameBoard = d3.select('.field').append('svg:image')
    .attr('xlink:href','http://www.publicdomainpictures.net/pictures/10000/nahled/starry-night-871287410454UmtH.jpg')
    .attr('width', gameOptions.width)
    .attr('height', gameOptions.height);

  updateScore = d3.select('#current-score').text(gameStats.score.toString());

  updateHighScore = d3.select('#high-score').text(gameStats.highScore.toString());

  updateCollision = d3.select('#collisions').text(gameStats.collisions.toString());

//   updateHighScore = function(){
//     gameStats.highScore = _.max(gameStats.highScore, gameStats.score);
//     return d3.select('high-score').text(gameStats.highScore.toString());
//   };

//   createEnemies = function() {
//     return_.range(0, gameOptions.numberEnemies).map(function(i) {
//       return {
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100
//       };
//     });
//   };

//   render = function(enemyData) {
//     var enemies;

//     enemies = gameBoard.selectAll('circle.enemy').data(enemyData, function(d) {
//       return d.id;
//     });

//     enemies.enter().append('svg:circle').attr('class', 'enemy')
//     .attr('cx', function(enemy) {
//       return axes.x(enemy.x);
//     }).attr('cy', function(enemy) {
//       return axes.y(enemy.y);
//     }).attr('r', 0);
//     enemies.exit().remove();
//   };



//   play = function() {
//     var gameTurn, increaseScore;
//     gameTurn = function() {
//       var newEnemyPositions;
//       newEnemyPositions = createEnemies();
//       return render(newEnemyPositions);
//     };
//   };
//   play();
}).call(this);


















