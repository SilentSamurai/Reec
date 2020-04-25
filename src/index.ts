//css
import './style.sass';

//JS
import * as _ from 'lodash';
// import 'jquery';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';



$(function () {
    $('[data-toggle="popover"]').popover()
});
