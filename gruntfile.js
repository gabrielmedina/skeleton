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

          'public/js/main.js':
          [
            'assets/bower/jquery/dist/jquery.js',
            'assets/js/functions.js',
            'assets/js/main.js'
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
          'public/css/style.css': 'assets/css/style.scss'
        }
      }
    }, // sass

    watch: {
      sass: {
        files: ['assets/css/*.sass'],
        tasks: ['sass']
      },
      dist: {
        files: [
        'assets/js/**/*',
        'assets/css/**/*'
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
