angular.module('myApp')
  .controller('RegisterCtrl', function ($scope, AuthFactory) {
    $scope.register = () => {
    // sends user credentials to server via POST and redirects to login page
      const username = $scope.username
      const password = $scope.password
      const email = $scope.email || `anonymous${Math.random() * 10000}@gmail.com`
      console.log(`client copied data to register as ${username}, ${password}, ${email}`)
      AuthFactory.register({ username, password, email })
    }
  })
