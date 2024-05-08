function expandDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function showResponse(response) {
  var responseContainer = document.getElementById("responseContainer");
  responseContainer.innerHTML = "<p>" + response + "</p>";
} 

