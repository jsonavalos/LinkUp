// Get the modal
var modal4 = document.getElementById("InviteModal");

// Get the button that opens the modal
var btn4 = document.getElementById("invitebutton");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it



// Get the modal
var modal3 = document.getElementById("AdminModal");

// Get the button that opens the modal
var btn3 = document.getElementById("addadmin");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal3 ) {
    modal3.style.display = "none";
  }
  if (event.target === modal4 ) {
    modal4.style.display = "none";
  }
};
