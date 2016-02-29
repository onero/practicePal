practicePal.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "src/views/home.html",
     controller: "mainCtrl"
   })
   .state('basics', {
     url: "/basics",
     templateUrl: "src/views/basics.html",
     controller: "mainCtrl"
   })
   .state('scales', {
     url: "/scales",
     templateUrl: "src/views/scales.html",
     controller: "mainCtrl"
   })
});
