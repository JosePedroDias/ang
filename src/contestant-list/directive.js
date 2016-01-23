angular.module('app')
  .directive('contestantList', function () {
    return {
      scope: {},
      templateUrl: '/contestant-list/directive.html',
      replace: true,
      controller: 'ContestantListCtrl',
      controllerAs: 'ctrl'
    };
  })
  .controller('ContestantListCtrl', function () {
    this.contestants = [
      {firstName: 'Rachel', lastName: 'Washington'},
      {firstName: 'Joshua', lastName: 'Foster'},
      {firstName: 'Samuel', lastName: 'Walker'},
      {firstName: 'Phyllis', lastName: 'Reynolds'}
    ];
  });
