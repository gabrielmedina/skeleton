module.exports = function(grunt){

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },

      target: {
        files: {
          'public/javascripts/modernizr.js':
          [
            'assets/bower/modernizr/modernizr.js'
          ],

          'public/javascripts/application.js':
          [
            'assets/bower/jquery/dist/jquery.js',
            'assets/bower/owlcar/owl-carousel/owl.carousel.min.js',
            'assets/javascripts/*'
          ]
        }
      }
    }, // uglify

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'public/stylesheets/application.css':
          [
            'assets/bower/bourbon/app/assets/stylesheets/_bourbon.scss',
            'assets/bower/neat/app/assets/stylesheets/_neat.scss',
            'assets/bower/owlcar/owl-carousel/owl.carousel.css',
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
