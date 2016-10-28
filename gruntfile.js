module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },

      target: {
        files: {
          'public/js/modernizr.js':
          [
            'assets/bower/modernizr/modernizr.js'
          ],

          'public/js/application.js':
          [
            'assets/bower/jquery/dist/jquery.js',
            'assets/bower/owlcar/owl-carousel/owl.carousel.min.js',
            'assets/javascripts/project/**.js',
            'assets/javascripts/**.js'
          ]
        }
      }
    }, // uglify

    sass: {
      dist: {
        options: {
          style: 'compressed',
          loadPath: require('node-bourbon').includePaths,
          loadPath: require('node-neat').includePaths
        },
        files: {
          'public/css/application.css': 'assets/stylesheets/application.scss'
        }
      }
    }, // sass

    watch: {
      options: {
        livereload: 1337,
      },

      css: {
        files: ['assets/stylesheets/**/*.scss'],
        tasks: ['sass'],
      },

      js: {
        files: ['assets/javascripts/**/*.js'],
        tasks: ['uglify'],
      },

      dist: {
        files: [
          'assets/javascripts/**/*',
          'assets/stylesheets/**/*'
        ],

        tasks: ['uglify', 'sass']
      }
    } // watch
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'sass']);
  grunt.registerTask('w', ['watch']);
};
