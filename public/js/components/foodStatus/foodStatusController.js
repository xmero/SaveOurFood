(function () {
  angular
    .module('myApp')
    .controller('FoodStatusController', FoodStatusController)

  function FoodStatusController ($state, $scope, $stateParams, $rootScope) {
    let vm = this
    console.log($stateParams)
    var { counterExpiring, counterExpired } = $stateParams
    // .then(response => { vm = response })
    console.log(counterExpiring)

    if (counterExpiring <= 2 && counterExpired <= 2) vm.current = ' ❤ Great Job ! Your food are Fresh ❤'
    else if ((counterExpiring > 2 || counterExpired > 2) && (counterExpiring < 4 || counterExpired < 5)) vm.current = '❗ Some Food are Expiring. Take a look ❗'
    else if (counterExpired > 4 || counterExpiring > 4) vm.current = '💔 Your food are crying. Check them 💔'
    else vm.current = 'You have little food. Need to eat more !!'
  }
})()
