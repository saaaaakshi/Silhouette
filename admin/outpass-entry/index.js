
const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent= thisYear

var rows = $("table tr");

// Loop through each row
rows.each(function() {
  // Get the text content of the row
  var text = $(this).text();

  // Check if the text is empty or not
  if (text.trim() == "") {
    // Add the hidden class if it is empty
    $(this).addClass("hidden");
  } else {
    // Remove the hidden class if it has some value
    $(this).removeClass("hidden");
  }
});