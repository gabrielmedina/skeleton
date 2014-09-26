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
        // We watch and compile sass files as normal but don't live reload here
        files: ['assets/_css/*.sass'],
        tasks: ['sass'],
      },
      livereload: {
        // Aqui você aponta os arquivos que quer que sejam atualizados quando uma alteração for feita
        // A porta padrão é 35729
        // Para evitar conflitos vou usar a 1337
        options: { livereload: 1337 },
        files: ['assets/_css/*'],
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
