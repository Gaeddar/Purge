var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3200);
}

function showPage() {
  document.getElementById("imageload").style.display = "none";
  document.getElementById("loading").style.display = "none";
  document.getElementById("loader").style.display = "none";
  document.getElementById("quotes").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}