var app = angular.module('app', [
    'ngRoute'
]);

app.controller('HomeCtrl', function($scope, $http){
  
    $scope.buttonSelect = {'loan':0, 'startDateMonth':0, 'loan': 0, 'rate':0, 'paymentTime':0};
    
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
        console.log('error');
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    
});