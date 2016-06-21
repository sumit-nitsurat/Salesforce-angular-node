module.exports = function ($scope, storageService, ENV) {

    $scope.prod = function () {
        $scope.login("https://login.salesforce.com/");
    }
    $scope.login = function (loginUrl) {

        var url = loginUrl + 'services/oauth2/authorize?display=popup&response_type=token' +
            '&client_id=' + encodeURIComponent(ENV.env.clientId) +
            '&redirect_uri=' + encodeURIComponent(ENV.env.redirectURL);

        console.debug(url);
        popupCenter(url, 'login', 700, 600);
    }
    
    $scope.userLogin = function () {
        window.location = 'eventList'
    }

    $scope.setCokkies = function (response) {
        console.debug('Angular Called from Legacy Code');

        storageService.set('SQBAccToken', response.access_token);
        storageService.set('SQBAPIVer', apiVersion);
        storageService.set('SQBInstURL', response.instance_url);
        storageService.set('SQBidURL', response.id);

    }

};