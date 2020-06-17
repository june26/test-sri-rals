//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery.flexslider
//= require_tree .

$(document).on("turbolinks:load", function() {
    $('.flexslider').flexslider();
  });