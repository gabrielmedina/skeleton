module.exports = function(grunt){

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
          'public/css/application.css':
          [
            'bower/owlcar/owl-carousel/owl.carousel.css',
            'assets/stylesheets/application.scss'
          ]
        }
      }
    }, // sass

    watch: {
      sass: {
        files: ['assets/stylesheets/*.sass'],
        tasks: ['sass']
      },

      lr: {
        options: {
          livereload: 1337
        },

        files: [
          'assets/stylesheets/**/*',
          'assets/javascripts/**/*'
        ]
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


  // Plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Tarefas que serão executadas
  grunt.registerTask('default', ['uglify', 'sass']);

  // Tarefa para Watch
  grunt.registerTask('w', ['watch']);
};
