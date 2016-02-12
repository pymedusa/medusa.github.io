module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsonlint: {
        files: ['scene_exceptions/scene_exceptions.json']
    },
    jshint: {
      files: ['Gruntfile.js']
    },
    watch: {
      files: ['<%= jsonlint.files %>', '<%=jshint.files %>'],
      tasks: ['jshint', 'jsonlint']
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jsonlint']);

  grunt.registerTask('default', ['jshint', 'jsonlint']);

};
