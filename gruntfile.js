module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: { "main.css": "main.less" },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "main.min.css": "main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "dist/scripts/main.min.js": "src/scripts/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less"]);
  grunt.registerTask("js", ["uglify"]);
};
