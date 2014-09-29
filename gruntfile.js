module.exports = function(grunt){

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },

      target: {
        files: {
          'assets/js/modernizr.js': 
          [ 
            'assets/bower/modernizr/modernizr.js'
          ],

          'assets/js/main.js':
          [
            'assets/bower/jquery/dist/jquery.js',
            'assets/_js/functions.js',
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
      sass: {
        files: ['assets/_css/*.sass'],
        tasks: ['sass']
      },
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
