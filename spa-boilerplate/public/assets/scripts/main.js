
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
      'blog': 'blog',
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

     // Blog Route
    blog: function() {
      console.log('Navigating to Blog Page');
      App.views['blog'].render();
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
      blog: new BlogView(), 
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
        bannerText: '<h1>Fashion Stylist</h1>'
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
        profilePic: '<img src="../assets/images/profile-pic-02.png" alt="profile pic" style="width: 170px"/>',
        aboutHeading: '<h2><span class="hello">Hello</span>, I am Tara Ocansey.</h2>',
        aboutParOne: '<p>I am a freelance Fashion Stylist living in Toronto, Canada.</p>',
        aboutParTwo: '<p>I recieved my Bachelor of Commerce (B.Com.) in Fashion Management at Humber College in 2014.</p>',
        aboutParThree: '<p>I am a creative, hardworking and motivated individual with progressive experience as well as developed strengths in the following areas:</p>',
        icons: [
          {
            src: "../assets/images/dress.png",
            description: "Fashion Styling"
          },
          {
            src: "../assets/images/mannequin-02.png",
            description: "Visual Merchandising"
          },
          {
            src: "../assets/images/trends.png",
            description: "Trend Forecasting"
          }
        ]
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
  // Blog View
  // -----------------------------

  var BlogView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#blog',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        blogHeading: '<h2>A FASHION INSPIRATION: MY GETAWAY</h2>',
        instagramLink: 'http://instagram.com/liveandflaneur/'
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
        contactHeading: '<h2><span class="hello">Connect with me!</span></h2>',
        icons: [
          {
            src: "../assets/images/fb-icon.png",
            link: "https://www.facebook.com/tara.conrad.12?fref=ts"
          },
          {
            src: "../assets/images/twitter-icon.png",
            link: "https://twitter.com/RelaxLive"
          },
          {
            src: "../assets/images/linkedin-icon.png",
            link: "https://www.linkedin.com/in/taraocansey"  
          }
        ]
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

// -----------------------------
// Blog Page - Instagram API
// 
$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/352782834/?access_token=806401368.5aa13be.4a08df065cbb41469c9cc20041432d3b",
  success: function(data) { 
  $('.name').text(data.data.full_name);  
  $('.username').text(data.data.username);
  }
});

$.ajax({
  type: "GET",
  dataType: "jsonp",
  cache: false,
  url: "https://api.instagram.com/v1/users/352782834/media/recent/?client_id=72da0b22fc36442da70468668e662414",
  success: function(data) {
    for (var i = 0; i < 40; i++) {
      $(".posts").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");      
    }
  }
});