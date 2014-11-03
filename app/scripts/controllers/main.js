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
    var loanRaisingMonth = "loanRaisingMonth=" + $scope.buttonSelect.startDateMonth;
    var loanRaisingYear = "loanRaisingYear=" + $scope.buttonSelect.startDateYear;
    var prinicpalAmount = "principalAmount=" + $scope.buttonSelect.loan;
    var annualNominalInterestRate = "annualNominalInterestRate=" + $scope.buttonSelect.rate;
    var totalNumberOfPayments = "totalNumberOfPayments=" + $scope.buttonSelect.paymentTime;
     
    // Simple POST request 
    $http.get('https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?' + loanRaisingMonth + '&' + loanRaisingYear + '&' + prinicpalAmount + '&' + annualNominalInterestRate + '&' + annualNominalInterestRate + '&' + totalNumberOfPayments).
    success(function(data, status, headers, config) {
        console.log(data);
  }).
  error(function(data, status, headers, config) {
        consol.log('error');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  });