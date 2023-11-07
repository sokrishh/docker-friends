//= require rails-ujs
//= require turbo
//= require_tree .
//= require_self

$(document).on('turbo:load', function() {
    // Select the flash message elements and set them to fade out after 3 seconds
    $('.flash-message').fadeIn('fast')
});