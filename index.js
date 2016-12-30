"use strict";
window.onload = loadPage;

function loadPage() {
  (function() {
    var body = $('body');
    var pageContent = $('.page-content');
    var toggle = $('.menu-toggle');
    var sideMenu = $('.menu-side');

    $('.menu-toggle').bind('click', function() {
      body.toggleClass('menu-open');
      pageContent.toggleClass('menu-open');
      sideMenu.toggleClass('add-shadow');
      return false;
    });
  })();
}
