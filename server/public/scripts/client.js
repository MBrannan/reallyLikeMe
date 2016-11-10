$(document).ready(function() {
  console.log("Tindernauts!");

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(data) {
      console.log('get request');
      appendToDom(data);
    }
  });

  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(data) {
      updateLikes(data);
    }
  });

  $("#bioContainer").on("click", "button", addLike);
    function addLike() {
      //increase like count
      var name = $(this).parent().data();
      $.ajax({
          type: 'POST',
          url: '/likes',
          data: name,
          success: function(response) {

          }
        })
  }

});

function appendToDom(bios) {
    for (var i = 0; i < bios.length; i++) {
      $("#bioContainer").append("<div class='bio'></div>");
      var $el = $("#bioContainer").children().last();
      $el.append("<h2>" + bios[i].name + "</h2>");
      $el.append("<p>" + bios[i].bio + "</p>");
      $el.append("<button type='button'>Like " + bios[i].name + "'s profile?</button><span id='" + bios[i].name + "Likes'></span>").data('name', bios[i].name);
      $el.append("<img src='../assets/images/" + bios[i].image + "' alt='Photo of " + bios[i].name + "'/>");
    }
}

function updateLikes(likes) {
  var names = Object.keys(likes);
  for (var i = 0; i < names.length; i++) {
    $('#' + names[i] + 'Likes').append(likes[names[i]]);
  }
}
