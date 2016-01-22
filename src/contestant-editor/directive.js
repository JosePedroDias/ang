angular.module('app', [])
  .directive('contestantEditor', function () {
    return {
      scope: {
        contestants: '='
      },
      templateUrl: 'contestant-editor/directive.html',
      replace: true,
      controller: 'ContestantEditorCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('ContestantEditorCtrl', function ($scope) {
    this.contestant = {};
    this.save = function () {
      $scope.contestants.push(this.contestant);
      this.contestant = {};
    };
  });
