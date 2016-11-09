$(document).ready(function() {
  console.log("Tindernauts!");

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(data) {
      appendToDom(data);
    }
  });

});

function appendToDom(bios) {
    for (var i = 0; i < bios.length; i++) {
      $("#bioContainer").append("<div class='bio'></div>");
      var $el = $("#bioContainer").children().last();
      $el.append("<h2>" + bios[i].name + "</h2>");
      $el.append("<p>" + bios[i].bio + "</p>");
      $el.append("<img src='../assets/images/" + bios[i].image + "' alt='Photo of " + bios[i].name + "'/>");
      $el.append("<button type='button'>Like " + bios[i].name + "'s profile?</button>");
    }
}
