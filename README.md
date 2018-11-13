angular-router-exception-handler
================================
[![Build Status](https://travis-ci.org/bendrucker/angular-router-exception-handler.svg?branch=master)](https://travis-ci.org/bendrucker/angular-router-exception-handler) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/angular-router-exception-handler.svg)](https://greenkeeper.io/)

Delegate route/state change errors to Angular's $exceptionHandler. For [ngRoute](https://docs.angularjs.org/api/ngRoute) and [UI-Router](https://github.com/angular-ui/ui-router).

## Overview

The most common source of routing errors are `resolve` methods which return rejected promises. Routing libraries broadcast an event when this happens and so errors can be difficult to track down. This adds event listeners that forward routing errors to [`$exceptionHandler`](https://docs.angularjs.org/api/ng/service/$exceptionHandler), the service that receives thrown errors in Angular code.

## Installing

```bash
$ npm install angular-router-exception-handler
```

```js
angular.module('myApp', [
  require('angular-router-exception-handler')
]);
