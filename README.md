# Laravel 5 Elixir Bootstrap & Fontawesome Assets
 
These assets were compiled using **npm** and **bower**.

## To use:

`npm install`

- This installs the laravel-elixir and gulp modules

`gulp` 

- Compiles all the files to public/

## The files here were compiled using the following steps with an initial Laravel setup:

- Make sure you have node installed: to verify 

`node -v`

- Next, install gulp globally to your machine:

`npm install -g gulp`

- Next, install bower (this will allow you to get bootstrap and fontawesome)

`npm install -g bower`

- After the above are installed, "cd" into the directory where you want to place your files. In my case I placed it in resources/assets/bower 

`bower init` 

- Follow the steps prompted to set up the bower.json file to load dependencies
- This will create a bower_components directory, then run 

`bower install bootstrap-sass --save-dev`

`bower install fontawesome --save-dev`
