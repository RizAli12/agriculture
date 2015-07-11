
 
Router.configure({
   layoutTemplate: 'layout',
   yieldTemplate: {
      header: {
         to: 'header'
      },

content_green: {
to: 'content_green' },
    
   }
});



Router.map(function() {
  this.route
('home', {path: '/'});
  
this.route('seasons');
  
this.route('seeds');
this.route('crops');
this.route('weather');
this.route('pests');
this.route('natural');
this.route('water');
this.route('food');
this.route('calltoaction');

});


Router.map(function () {
    this.route('/', {
        path: '/email/',
        template: 'verifyemail',
    });

    this.route('verifyEmail', {
        controller: 'AccountController',
        path: '/verify-email/:token',
        action: 'verifyEmail'
    });

    this.route('verified', {
        path: '/verified',
        template: 'verified'
    });

    this.route('checkemail', {
        path: '/checkemail',
        template: 'checkemail'
    });
});

// More info: https://github.com/EventedMind/iron-router/issues/3
AccountController = RouteController.extend({
    verifyEmail: function () {
        Accounts.verifyEmail(this.params.token, function () {
            Router.go('/verified');
        });
    }
});

