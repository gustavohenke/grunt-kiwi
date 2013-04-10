# grunt-kiwi
> Render Kiwi templates to HTML.

## Getting started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kiwi --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-kiwi");
```

## Kiwi task
_Run this task with the `grunt kiwi` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### encoding
Type: `String`
Default: utf8

What encoding should be used when writing the HTML tags.

### Usage examples

In this example, running `grunt kiwi:target` (or `grunt kiwi`, because `kiwi` is a multi task) will render each file in the `src` array to HTML files in the `dest` directory.

```js
kiwi: {
    target: {
        src: [ "mytemplates/*.kiwi", "mytemplates2/*.kiwi" ],
        dest: "myhtml/"
    }
}
```
