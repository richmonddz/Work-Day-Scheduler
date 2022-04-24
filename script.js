var saveBtn = $(".saveBtn");
var currentDate = moment().format("LLLL");
$("#currentDay").html(currentDate);

saveBtn.on("click", function () {
  var time = $(this).siblings(".Time").text();
  var todo = $(this).siblings(".ToDo").val();

  localStorage.setItem(time, todo);
});
function ColorCode() {
  var currHour = moment().hours();

  $(".time-block").each(function () {
    var SetHour = parseInt($(this).attr("id"));

    if (SetHour > currHour) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else if (SetHour < currHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}
function RetToDo() {
  $(".Time").each(function () {
    var ToDoHr = $(this).text();
    var FtToDo = localStorage.getItem(ToDoHr);
    if (FtToDo !== null) {
      $(this).siblings(".ToDo").val(FtToDo);
    }
  });
}

RetToDo();
ColorCode();
