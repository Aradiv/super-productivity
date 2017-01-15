/**
 * @ngdoc function
 * @name superProductivity.controller:WasIdleCtrl
 * @description
 * # WasIdleCtrl
 * Controller of the superProductivity
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .controller('WasIdleCtrl', WasIdleCtrl);

  /* @ngInject */
  function WasIdleCtrl($mdDialog, $rootScope, Tasks, $window, idleTime) {
    let vm = this;

    vm.idleTime = $window.moment.duration(idleTime, 'milliseconds');
    console.log(vm.idleTime);

    vm.undoneTasks = Tasks.getUndoneToday();
    vm.selectedTask = $rootScope.r.currentTask;

    vm.trackIdleToTask = () => {
      Tasks.updateTimeSpentToday(vm.selectedTask, vm.idleTime);
      vm.selectedTask.timeSpent = timeSpentCalculated;
      // set current task to the selected one
      Tasks.updateCurrent(vm.selectedTask);
      $mdDialog.hide();
    };

    vm.cancel = () => {
      $mdDialog.cancel();
    };
  }
})();
