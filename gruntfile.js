module.exports = function(grunt){

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },

      target: {
        files: {
          'assets/js/main.js': 
            [
              'assets/_js/vendor/modernizr.min.js',
              'assets/bower/jquery/dist/jquery.min.js',
              'assets/_js/vendor/functions.js',
              'assets/_js/vendor/plugins.js',
              'assets/_js/main.js'
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
          'assets/css/style.css': 'assets/_css/style.scss'
        }
      }
    }, // sass

  	watch: {
      dist: {
        files: [
          'assets/_js/**/*',
          'assets/_css/**/*'
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