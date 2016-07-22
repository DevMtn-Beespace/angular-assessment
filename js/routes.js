angular.module('assessment')
.config(function($stateProvider, $urlRouterProvider) {

  //This is a catch all for our routes

  $urlRouterProvider.otherwise("/");  // send to index if can't find the route
  $stateProvider
    .state('home', {
        url: "/",
        templateUrl: "views/home.html"
    })
    .state('about', {
        url: "/about",
        templateUrl: "views/about.html"
    })
    // we will need to pull in params and populate the view based on param.
    .state('blog', {
        url: "/blog",
        templateUrl: "views/blog.html"
    })
    .state('shop', {
        url: "/shop",
        templateUrl: "views/shop.html"
    })
    // .state('projects', {
    //     url: "/projects/:id",
    //     templateUrl: "views/projects.html",
    //     controller: "mainCtrl",
    //     resolve: [
    //
    //     ]
    // })

  // We need to configure our routes here


});
