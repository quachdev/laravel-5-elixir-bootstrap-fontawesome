var elixir = require('laravel-elixir');

var paths = {
    bootstrap: './resources/assets/bower/bower_components/bootstrap-sass/assets/',
    fontawesome: './resources/assets/bower/bower_components/fontawesome/',
    jquery: './resources/assets/bower/bower_components/jquery/'
};

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(
        'app.scss',
        'public/css',
        {includePaths:
            [paths.bootstrap + 'stylesheets/',
            paths.fontawesome + 'scss/']
        })
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .scripts(
        [
            paths.jquery + 'dist/jquery.js',
            paths.bootstrap + 'javascripts/bootstrap.js'
        ], 'public/js/app.js', './');
});

