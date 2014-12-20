// start slingin' some d3 here.
(function(){
  var gameOptions, gameStats, axes, gameBoard, updateScore, updateHighScore, Player;

  gameOptions = {
    height: 450,
    width: 700,
    numberEnemies: 30,
    padding: 20
  };

  gameStats = {
    score: 0,
    highScore: 0
  };

  axes = {
    x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
    y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
  };

  gameBoard = d3.select('.field').append('svg:svg').attr('width', gameOptions.width).attr('height', gameOptions.height);

  updateScore = d3.select('#current-score').text(gameStats.score.toString());

  updateHighScore = function(){
    gameStats.highScore = _.max(gameStats.highScore, gameStats.score);
    return d3.select('high-score').text(gameStats.highScore.toString());
  };

  createEnemies = function() {
    return_.range(0, gameOptions.numberEnemies).map(function(i) {
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      };
    });
  };

  render = function(enemyData) {
    
  };
}).call(this);