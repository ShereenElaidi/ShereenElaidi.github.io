function init() {
	renderMathInElement(document.querySelector("h1")); 
}
window.onload = init; 



function openProject(evt, projectName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
} 

window.onload = function() {
  let lastMod = new Date(document.lastModified);
  let day = lastMod.getDate();
  console.log(lastMod);
  let month = lastMod.getMonth()+1;
  console.log(month);
  let strMonth = month.toString();
  let numMonth = Number(strMonth)
  console.log(strMonth); 
  if (1 === numMonth) {
  	month = "January"; 
  } else if (2 === numMonth) {
  	month = "February"; 
  } else if (3 === numMonth) {
  	month = "March"; 
  } else if (4 === numMonth) {
  	month = "April"; 
  } else if (5 === numMonth) {
  	month = "May"; 
  } else if (6 === numMonth) {
  	month = "June"; 
  } else if (7 === numMonth) {
  	console.log("True"); 
  	month = "July"; 
  } else if (8 === numMonth) {
  	month = "August"; 
  } else if (9 === numMonth) {
  	month = "September"; 
  } else if (10 === numMonth) {
  	month = "October"; 
  } else if (11 === numMonth) {
  	month = "November"; 
  } else {
  	month = "December"; 
  }
  let year = lastMod.getFullYear();
  let hour = lastMod.getHours();
  let minute = lastMod.getMinutes();
  let strMin = minute.toString(); 
  let numMin = Number(strMin); 
  if (numMin < 10) { 
  	minute = "0" + numMin;
  }
  console.log(minute); 
  let s = lastMod.getSeconds(); 
  let lastModStr = day + ' ' + month + ' ' + year + " " + hour + ":" + minute + " EST";
  document.getElementById("lastModified").textContent = "Last updated:  " + lastModStr;
}

