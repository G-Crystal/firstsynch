var app = angular.module('myApp',[]);

app.directive('numbersOnly', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        if (text) {
          var transformedInput = text.replace(/[^0-9]/g, '');

          if (transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
          }
          return transformedInput;
        }
        return undefined;
      }            
      ngModelCtrl.$parsers.push(fromUser);
    }
  };
});

app.controller("menuCtrl", function($scope, $location, $http) {
  $scope.getClass = function (path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  };

  $scope.setToggle = function (status) {
    switch (status) {
      case 'toggle_company':
        $scope.toggle_company = !$scope.toggle_company;
        break;
      case 'toggle_hiring':
        $scope.toggle_hiring = !$scope.toggle_hiring;
        break;
      case 'toggle_employees':
        $scope.toggle_employees = !$scope.toggle_employees;
        break;
    }
  };

  $scope.menu_init = function () {
    $scope.home_menus = [
      {num: '01', link: 'main_info', label: 'MAIN INFO'}
    ];

    $scope.company_menus = [
      {num: '01', link: 'date_of_establishment', label: 'DATE OF ESTABLISHMENT'},
      {num: '02', link: 'internships', label: 'INTERNSHIPS'},
      {num: '03', link: 'company_size', label: 'COMPANY SIZE'},
      {num: '04', link: 'hire_departure', label: 'HIRE & DEPARTURE RATES'},
      {num: '05', link: 'average_salary', label: 'AVERAGE ENTRY LEVEL SALARY'},
      {num: '06', link: 'total_funding', label: 'TOTAL FUNDING SIZE'},
      {num: '07', link: 'company_growth', label: 'COMPANY GROWTH RATE'},
      {num: '08', link: 'investor_confidence', label: 'INVESTOR CONFIDENCE'},
      {num: '09', link: 'characteristics', label: 'CHARACTERISTICS'},
      {num: '10', link: 'office', label: 'OFFICE'},
      {num: '11', link: 'location', label: 'LOCATION'},
      {num: '12', link: 'founders', label: 'FOUNDERS'}
    ];

    $scope.hiring_menus = [
      {num: '01', link: 'work_for_us', label: 'WHY YOU SHOULD WORK FOR US'},
      {num: '02', link: 'positions_hiring', label: 'POSITIONS HIRING FOR'},
      {num: '03', link: 'skills', label: 'SKILLS THAT WE ARE SEEKING'},
      {num: '04', link: 'interview_question', label: 'INTERVIEW QUESTIONS'}
    ];
    
    $scope.enployees_menus = [
      {num: '01', link: 'top3_schools', label: 'TOP 3 SCHOOLS OUR EMPLOYEES GRADUATED FROM'},
      {num: '02', link: 'employee_review', label: 'EMPLOYEE REVIEWS'},
      {num: '03', link: 'past_employers', label: 'PAST EMPLOYERS'}
    ];
  }

  $scope.init = function () {
    $scope.menu_init();

    var path = $location.$$path;
    $scope.toggle_company = false;
    $scope.toggle_hiring = false;
    $scope.toggle_employees = false;
  };

  $scope.init();
});

app.controller("myCtrl", function($scope, $http) {
  $scope.formData = {
    hiredescription: '',
    hireNumber: '',
    depatureDesc: '',
    depatureNumber: ''
  };

  $scope.submit = function() {
    console.log($scope.formData);
  };
});

