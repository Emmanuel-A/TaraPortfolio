
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'about': 'about',
      'portfolio': 'portfolio',
      'resume': 'resume',
      'contact': 'contact'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

     // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    },

     // Resume Route
    resume: function() {
      console.log('Navigating to Resume Page');
      App.views['resume'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      about: new AboutView(), 
      portfolio: new PortfolioView(), 
      resume: new ResumeView(), 
      contact: new ContactView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        // content: '<img src="../assets/images/home-banner-01.png" alt="banner image" style="width: 100%;"/>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<p>About Page</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Portfolio View
  // -----------------------------

  var PortfolioView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolio',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<p>Portfolio Page</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Resume View
  // -----------------------------

  var ResumeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#resume',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<p>Resume Page</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<p>Contact Page</p>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

 $(document).delegate('a', 'click', function(e) {
    var url = $(this).attr('href') || '#';
    var isLocal = url.match(/^#/)
    if(isLocal) { e.preventDefault(); App.router.navigate($(this).attr('href'), { trigger: true }); }
  });
});