'use strict';

var angular = require('angular');
var expect  = require('chai').expect;

describe('angular-router-exception-handler', function () {

  beforeEach(angular.mock.module(require('../')));
  beforeEach(angular.mock.module(function ($exceptionHandlerProvider) {
    $exceptionHandlerProvider.mode('log');
  }));

  it('passes $routeChangeError to $exceptionHandler', function () {
    angular.mock.module(function ($provide) {
      $provide.value('$route', {});
    });
    angular.mock.inject(function ($rootScope, $exceptionHandler) {
      var err = new Error();
      $rootScope.$broadcast('$routeChangeError', 'to', 'from', err);
      expect($exceptionHandler.errors[0][0]).to.equal(err);
      expect($exceptionHandler.errors[0][1]).to.deep.equal({
        to: 'to',
        from: 'from'
      });
    });
  });

  it('passes $stateChangeError to $exceptionHandler', function () {
    angular.mock.module(function ($provide) {
      $provide.value('$state', {});
    });
    angular.mock.inject(function ($rootScope, $exceptionHandler) {
      var err = new Error();
      $rootScope.$broadcast('$stateChangeError', 'toState', 'toParams', 'fromState', 'fromParams', err);
      expect($exceptionHandler.errors[0][0]).to.equal(err);
      expect($exceptionHandler.errors[0][1]).to.deep.equal({
        to: {
          state: 'toState',
          params: 'toParams'
        },
        from: {
          state: 'fromState',
          params: 'fromParams'
        }
      });
    });
  });

});
