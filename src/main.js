import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Title from './img/title.png';

let title = document.getElementById('title');
title.src = Title;

$(document).ready(function() {
});

function blinkBorder() {
  setInterval(($("#start").hide()), 10000)
  setTimeout(
  setInterval(($("#start").show()), 1000), 500)
};

blinkBorder();
