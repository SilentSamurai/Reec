const {
    mix
} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    output: {
        chunkFilename: './public/js/[name].js',
    },
});

mix.setPublicPath('public')

    .options({
        processCssUrls: false,
        imgLoaderOptions: {
            enabled: false
        }
    })
    .sass('.sass/app.scss', './public/css/app.css')
    .js('.js/app.js', './public/js/app.js')

    .styles([
        '.plugins/datatables/dataTables.bootstrap4.css',
        '.sass/lte/adminlte.min.css',
        '.sass/mdb/mdb.min.css',
        '.plugins/iCheck/flat/blue.css',
        '.plugins/morris/morris.css',
        '.plugins/jvectormap/jquery-jvectormap-1.2.2.css',
        '.plugins/datepicker/datepicker3.css',
        '.plugins/daterangepicker/daterangepicker-bs3.css',
        '.plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css',
        '.plugins/select2/select2.css',
        './public/css/app.css'
    ], './public/css/final.css')


    .scripts([
        '.plugins/jquery/jquery.min.js',
        '.js/lte/plugins/jquery/jquery-ui.min.js',
        '.plugins/bootstrap/js/bootstrap.bundle.min.js',
        '.js/mdb/mdb.min.js',
        '.js/lte/plugins/vue/vue.js',
        '.js/lte/plugins/dropzone/dropzone.js',
        '.plugins/select2/select2.full.min.js',
        '.js/lte/plugins/raphael/raphael-min.js',
        '.plugins/morris/morris.min.js',
        '.plugins/sparkline/jquery.sparkline.min.js',
        '.plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        '.plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        '.plugins/knob/jquery.knob.js',
        '.js/lte/plugins/raphael/moment/moment.min.js',
        '.plugins/daterangepicker/daterangepicker.js',
        '.plugins/datepicker/bootstrap-datepicker.js',
        '.plugins/colorpicker/bootstrap-colorpicker.min.js',
        '.plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        '.plugins/slimScroll/jquery.slimscroll.min.js',
        '.plugins/fastclick/fastclick.js',
        '.js/lte/plugins/jquery/jquery.nestable.js',
        '.js/lte/plugins/jquery/jquery.matchHeight.js',
        '.js/lte/plugins/ace/ace.js',

        '.plugins/datatables/jquery.dataTables.js',
        '.plugins/datatables/dataTables.bootstrap4.js',
        '.js/lte/adminlte.js',
        '.js/media.js',
        '.js/voyager_ace_editor.js',
        '.js/tinymce.js',
        '.js/voyager_tinymce.js',
        //'.js/lte/pages/dashboard.js',
        //'.js/lte/demo.js',
        //'./publishable/assets/js/app.js',
        '.js/mdb/sd_voyager.js',
    ], './public/js/final.js');