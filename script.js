var currentDate = moment().format("LLLL");
$("#currentDay").html(currentDate);

$("saveBtn").on("click", function () {
  var text = $(this).siblings("textHere").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(text, time);
  $("#com-3pm .description").val(localStorage.getitem("com-3pm"));
});
