module.exports = function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');
	//$urlRouterProvider.when('/home','/home/dashboard/:id');
    $stateProvider
	.state('home', {
			url: '/',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'

        })
		.state('home.dashboard', {
    
			url: '/dashboard/:id',
            templateUrl: '../views/components/Dashboard.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        });
        $locationProvider.html5Mode(true);
};