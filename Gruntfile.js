module.exports = function(grunt) {

    var package = require("./package.json");
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        release: {
            options: {
                bump: true, //default: true
                file: "package.json", //default: package.json
                add: true, //default: true
                commit: true, //default: true
                tag: true, //default: true
                push: true, //default: true
                pushTags: true, //default: true
                npm: false, //default: true
                npmtag: false, //default: no tag
                folder: "folder/to/publish/to/npm",
                tagName: "<%= version %>",
                commitMessage: "new version <%= version %>", //default: "release <%= version %>"
                tagMessage: "tagging version <%= version %>", //default: "Version <%= version %>",
                github: false
                // github: {
                //     repo: "", //put your user/repo here
                //     usernameVar: "GITHUB_USERNAME", //ENVIRONMENT VARIABLE that contains Github username
                //     passwordVar: "GITHUB_PASSWORD" //ENVIRONMENT VARIABLE that contains Github password
                //  }
            }
        },
        env: {
            options: {
                /* Shared Options Hash */
                //Dymically generate this by commit hook?
                RELEASE_TAG: package.version
            },
            dev: {
                NODE_ENV: "DEVELOPMENT"
            },
            prod: {
                NODE_ENV: "PRODUCTION"
            }
        },
        preprocess: {
            dev: {
                files: [{
                    "index.html": "index.html.template"
                }]
            },
            prod: {
                files: [{
                    "index.html": "index.html.template"
                }]
            }
        },
        copy: {
            main: {
                files: [{
                        expand: true,
                        cwd: "./partials/",
                        src: ["**/*"],
                        dest: "build/partials"
                    }, {
                        expand: true,
                        cwd: "./",
                        src: ["index.html"],
                        dest: "build/"
                    }, {
                        expand: true,
                        cwd: "./vendor",
                        src: ["**/*js", "*/*js"],
                        dest: "build/vendor"
                    },
                    //  {
                    //     expand: true,
                    //     cwd: "./css/",
                    //     src: ["**/*"],
                    //     dest: "build/css/"
                    // },
                    {
                        expand: true,
                        cwd: "./img/",
                        src: ["**/*"],
                        dest: "build/img/"
                    }
                ]
            }
        },
        requirejs: {
            compile: {
                options: grunt.file.readJSON("build-config.json")
            }
        },
        ngmin: {
            files: {
                src: "build/js/main-src.js",
                dest: "build/js/main-src.js"
            }
        },
        uglify: {
            main: {
                options: {
                    mangle: false,
                    report: "min",
                    sourceMappingURL: "./source-map.js",
                    sourceMap: "build/js/source-map.js"
                },
                files: {
                    "build/js/main.js": ["build/js/main-src.js"],
                    "build/vendor/requirejs/require.js": ["vendor/requirejs/require.js"]
                }
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: "./partials/",
                    src: ["**/*"],
                    dest: "build/partials"
                }, { // Dictionary of files
                    "build/index.html": "index.html", // "destination": "source"
                }]
            }
        },
        karma: {
            unit: {
                autoWatch: false,
                configFile: "./test/karma-unit.conf.js",
                singleRun: true
            },
            ci: {
                autoWatch: false,
                singleRun: true,
                configFile: "./test/karma-unit.conf.js",
                browsers: ["PhantomJS"]
            },
            watch: {
                autoWatch: true,
                configFile: "./test/karma-unit.conf.js",
                singleRun: false,
                browsers: ["Chrome"]
            }
        },
        watch: {
            html: {
                // files: ["*.html"],
                files: ["**/*html", "css/*css", "js/**/*js"],
                options: {
                    // Start a live reload server on the default port 35729
                    livereload: true,
                },
            },
            scripts: {
                files: ["js/*.js", "js/**/*.js"],
                tasks: [],
                options: {
                    interrupt: true
                }
            }
        },
        "prettify": {
            options: {},
            html: {
                files: [{
                    "index.html": "index.html"
                }, {
                    expand: true,
                    cwd: "./partials/",
                    src: ["**/*html"],
                    dest: "partials"
                }]
            }
        },
        "jsbeautifier": {
            "default": {
                src: ["js/**/*.js", "*.js", "test/**/*.js"]
            },
            "git-pre-commit": {
                src: ["js/**/*.js", "*.js", "test/**/*.js"],
                options: {
                    mode: "VERIFY_ONLY"
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    "./build/css/main.css": ["index.html"]
                }
            }
        }
    });

    // set VERSION to project
    grunt.loadNpmTasks("grunt-release-steps");
    // preprocess the html or javascript
    grunt.loadNpmTasks("grunt-preprocess");
    grunt.loadNpmTasks("grunt-env");

    // build build directory
    grunt.loadNpmTasks("grunt-contrib-copy");

    // minify js
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-ngmin")

    // minify html
    grunt.loadNpmTasks("grunt-contrib-htmlmin");

    // minify css and clean unused :D
    grunt.loadNpmTasks("grunt-uncss");

    // watch constantly
    grunt.loadNpmTasks("grunt-contrib-watch");

    //beautify
    grunt.loadNpmTasks("grunt-prettify");
    grunt.loadNpmTasks("grunt-jsbeautifier");
    // testing
    grunt.loadNpmTasks("grunt-karma");



    grunt.registerTask("beauty", ["prettify", "jsbeautifier"]);
    grunt.registerTask("build-js", ["copy", "requirejs", "ngmin", "uglify"]);
    grunt.registerTask("build-html", ["htmlmin"]);
    grunt.registerTask("build-css", ["uncss"]);
    grunt.registerTask("build", ["build-js", "build-html", "build-css"]);


    grunt.registerTask("dev", ["env:dev", "preprocess:dev", "beauty"]);
    grunt.registerTask("prod", ["env:dev", "preprocess:dev", "build-css", "env:prod", "preprocess:prod", "build"]);

    grunt.registerTask("bump", ["release:bump:patch"]);
    grunt.registerTask("commit", ["release:commit"]);

    grunt.registerTask("deploy", ["bump", "dev"]);

    grunt.registerTask("test", ["karma:watch"]);

    grunt.registerTask("default", ["dev"]);

};
