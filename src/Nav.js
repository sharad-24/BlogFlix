const Sharad = function() {
  var x = document.getElementById("myTopnav");
  console.log("sharad singhania")
  if (x.className === "topnav") {
  	console.log("sharad")
    x.className += " responsive";
  } else {
  	console.log("singhania")
    x.className = "topnav";
  }
}

export default Sharad;