practicePal.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /home
 $urlRouterProvider.otherwise("/home");

 $stateProvider
   .state('home', {
     url: "/home",
     templateUrl: "views/home.html"
   })
   .state('basics', {
     url: "/basics",
     templateUrl: "views/basics.html",
     controller: "basicsCtrl"
   })
   .state('scales', {
     url: "/scales",
     templateUrl: "views/scales.html",
     controller: "scalesCtrl"
   })
});
