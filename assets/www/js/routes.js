angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('ecom', {
      url: '/page1',
      templateUrl: 'templates/ecom.html',
      controller: 'ecomCtrl'
    })
          
        
    .state('coffeeShop', {
      url: '/page4',
      templateUrl: 'templates/coffeeShop.html',
      controller: 'coffeeShopCtrl'
    })
    
      
        
    .state('pharmacy', {
      url: '/page5',
      templateUrl: 'templates/pharmacy.html',
      controller: 'pharmacyCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});
