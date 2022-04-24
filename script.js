var saveBtn = $(".saveBtn");
var currentDate = moment().format("LLLL");
$("#currentDay").html(currentDate);

saveBtn.on("click", function () {
  var time = $(this).siblings(".Time").text();
  var todo = $(this).siblings(".ToDo").val();

  localStorage.setItem(time, todo);
});
function ColorCode() {
  var hour = moment().hours();

  $(".ToDo").each(function () {
    var SetHour = parseInt($(this).attr("id"));

    if (SetHour > hour) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else if (SetHour === hour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("past");
    }
  });
}
ColorCode();
