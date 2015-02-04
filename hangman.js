var HangManCtrl = function($scope) {
  $scope.currentWord = "angular";
  $scope.guesses = [];
  $scope.guessedStyle = {color: 'green'};
  $scope.wrongStyle = {color: 'red'};

  $scope.addWord = function(){
      $scope.currentWord = $scope.newWord;
      $scope.guesses = [];
      $scope.newWord = "";
  };

  $scope.displayChars = function(){
    var chars = $scope.currentWord.split("");

    chars.forEach(function(val, index){
      if($scope.guesses.indexOf(val) === -1){
        chars[index] = "_";
      }
    });
    return chars;
  };

  $scope.addGuess = function(){
    if($scope.guesses.indexOf($scope.newGuess) === -1){
      $scope.guesses.push($scope.newGuess);
    }
    // $scope.currentGuess = $scope.newGuess;
    
    //testing
    //console.log($scope.guesses);
    $scope.newGuess = "";
  };

  $scope.isGuessed = function(){
    var chars = $scope.currentWord.split("");
    return chars.indexOf(this.guess) !== -1 ? $scope.guessedStyle : $scope.wrongStyle;
  }

};