'use strict';

/**
 * @ngdoc function
 * @name iteraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iteraApp
 */
angular.module('iteraApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    // Parameters to send
    switch($scope.buttonSelect.startDateMonth) {
            var loanRaisingMonth = 'loanRaisingMonth=';
            case 'Jan': 
                loanRaisingMonth += 1; 
                break;
            case 'Feb': 
                loanRaisingMonth += 2;
                break;
            case 'Mar': 
                loanRaisingMonth += 3;
                break;
            case 'Apr': 
                loanRaisingMonth += 4;
                break;
            case 'Mai': 
                loanRaisingMonth += 5;
                break;
            case 'Jun': 
                loanRaisingMonth += 6;
                break;
            case 'Jul': 
                loanRaisingMonth += 7;
                break;
            case 'Aug': 
                loanRaisingMonth += 8;
                break;
            case 'Sep': 
                loanRaisingMonth += 9;
                break;
            case 'Okt': 
                loanRaisingMonth += 10;
                break;
            case 'Nov': 
                loanRaisingMonth += 11;
                break;
            case 'Dec': 
                loanRaisingMonth += 12;
                break;
            default: 
                loanRaisingMonth += 1;
            
    }
    
    
    var loanRaisingMonth = "loanRaisingMonth=" + $scope.buttonSelect.startDateMonth;
    var loanRaisingYear = "loanRaisingYear=" + $scope.buttonSelect.startDateYear;
    var prinicpalAmount = "principalAmount=" + $scope.buttonSelect.loan;
    var annualNominalInterestRate = "annualNominalInterestRate=" + $scope.buttonSelect.rate;
    var totalNumberOfPayments = "totalNumberOfPayments=" + $scope.buttonSelect.paymentTime;
    var fullURL = 'http://localhost/?' +
        loanRaisingMonth + '&' + 
        loanRaisingYear + '&' + 
        prinicpalAmount + '&' + 
        annualNominalInterestRate + '&' + 
        annualNominalInterestRate + '&' + 
        totalNumberOfPayments;
     
    // Simple POST request 
    $http.get(fullURL).
    success(function(data, status, headers, config) {
        console.log(data);
    }).
    error(function(data, status, headers, config) {
        console.log('error');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    });
  });