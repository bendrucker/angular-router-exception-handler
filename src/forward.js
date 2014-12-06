'use strict';

module.exports = function ($injector, $rootScope, $exceptionHandler) {
  if ($injector.has('$route')) {
    $rootScope.$on('$routeChangeError', function (event, to, from, err) {
      $exceptionHandler(err, {
        to: to,
        from: from
      });
    });
  }
  if ($injector.has('$state')) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, err) {
      $exceptionHandler(err, {
        to: {
          state: toState,
          params: toParams
        },
        from: {
          state: fromState,
          params: fromParams
        }
      });
    });
  }
};
module.exports.$inject = ['$injector', '$rootScope', '$exceptionHandler'];
