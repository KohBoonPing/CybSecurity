angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('start', {
    url: '/page1',
    templateUrl: 'templates/start.html',
    controller: 'startCtrl'
  })

  .state('englishVideo', {
    url: '/page5',
    templateUrl: 'templates/englishVideo.html',
    controller: 'englishVideoCtrl'
  })

  .state('englishVideo1', {
    url: '/page13',
    templateUrl: 'templates/englishVideo1.html',
    controller: 'englishVideo1Ctrl'
  })

  .state('englishVideo2', {
    url: '/page14',
    templateUrl: 'templates/englishVideo2.html',
    controller: 'englishVideo2Ctrl'
  })

  .state('englishQuiz', {
    url: '/page6',
    templateUrl: 'templates/englishQuiz.html',
    controller: 'englishQuizCtrl'
  })

  .state('englishLesson', {
    url: '/page7',
    templateUrl: 'templates/englishLesson.html',
    controller: 'englishLessonCtrl'
  })

  .state('englishMain', {
    url: '/page2',
    templateUrl: 'templates/englishMain.html',
    controller: 'englishMainCtrl'
  })

  .state('malayMain', {
    url: '/page3',
    templateUrl: 'templates/malayMain.html',
    controller: 'malayMainCtrl'
  })

  .state('chineseMain', {
    url: '/page4',
    templateUrl: 'templates/chineseMain.html',
    controller: 'chineseMainCtrl'
  })

  .state('quiz1Instructions', {
    url: '/page8',
    templateUrl: 'templates/quiz1Instructions.html',
    controller: 'quiz1InstructionsCtrl'
  })

  .state('quiz1Qn1', {
    url: '/page12',
    templateUrl: 'templates/quiz1Qn1.html',
    controller: 'quiz1Qn1Ctrl'
  })

  .state('eLesson1', {
    url: '/page15',
    templateUrl: 'templates/eLesson1.html',
    controller: 'eLesson1Ctrl'
  })

  .state('quiz1Qn1CorrectAnswer', {
    url: '/page9',
    templateUrl: 'templates/quiz1Qn1CorrectAnswer.html',
    controller: 'quiz1Qn1CorrectAnswerCtrl'
  })

  .state('quiz1Qn2CorrectAnswer', {
    url: '/page11',
    templateUrl: 'templates/quiz1Qn2CorrectAnswer.html',
    controller: 'quiz1Qn2CorrectAnswerCtrl'
  })

  .state('quiz1Qn2', {
    url: '/page10',
    templateUrl: 'templates/quiz1Qn2.html',
    controller: 'quiz1Qn2Ctrl'
  })

  .state('eLesson2', {
    url: '/page16',
    templateUrl: 'templates/eLesson2.html',
    controller: 'eLesson2Ctrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});