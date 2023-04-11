document.write(`

  
<div class="sidenav">

<a href="/index">Home</a>

<button class="dropdown-btn">Section Properties
  <i class="fa fa-caret-down"></i>
</button>

<div class="dropdown-container">
  <a href="/properties/ub">UB</a>
  <a href="/properties/uc">UC</a>
  <a href="/properties/pfc">PFC</a>
  <a href="/properties/rhs">RHS</a>
  <a href="/properties/shs">SHS</a>
  <a href="/properties/chs">CHS</a>
</div>


<button class="dropdown-btn">Moment Capacities
  <i class="fa fa-caret-down"></i>
</button>

<div class="dropdown-container">

  <a href="/moment/ub">UB</a>
  <a href="/moment/uc">UC</a>
  <a href="/moment/pfc">PFC</a>
  <a href="/moment/rhs350">RHS350</a>
  <a href="/moment/rhs450">RHS450</a>
  <a href="/moment/shs350">SHS350</a>
  <a href="/moment/shs450">SHS450</a>
  <a href="/moment/shs250">CHS250</a>
  <a href="/moment/shs350">CHS350</a>
</div>


<button class="dropdown-btn">Compression Capacities
  <i class="fa fa-caret-down"></i>
</button>

<div class="dropdown-container">


  <a href="/comp/ub">UB</a>
  <a href="/comp/uc">UC</a>
  <a href="/comp/pfc">PFC</a>
  <a href="/comp/rhs350">RHS350</a>
  <a href="/comp/rhs450">RHS450</a>
  <a href="/comp/shs350">SHS350</a>
  <a href="/comp/shs450">SHS450</a>
  <a href="/comp/chs250">CHS250</a>
  <a href="/comp/chs350">CHS350</a>
</div>

<a href="/properties/bolts">Bolts</a>
<a href="/properties/welds">Welds</a>
<a href="/plate">Plates</a>

<a href="/conc/concrete" class="dropbtn">Concrete</a>

<a href="/conc/mesh">Mesh/Steel</a>

<a href="/interpolation">Interpolation</a>
<!--<li class="finalLogo" style="float:right; background-color: #8a8a8a;"><a href="/index"><img src="../GTLOGO.png" align="center" width=200px></a>-->
<a href="https://glynntucker.sharepoint.com" target="_blanks">Sharepoint Home</a>
</div>


<style>
.headerbar {
  background-color: #084887B3;
  backdrop-filter: blur(10px);
  text-align: left;
  padding: 10px 0px 10px 240px;
}


body {
  font-family: "Lato", sans-serif;
  margin: 0px;
  background-color: #b0b0b0;
}

/* Fixed sidenav, full height */
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

/* On mouse-over */
.sidenav a:hover, .dropdown-btn:hover {
  color: #f1f1f1;
}

/* Main content */
.main {
  margin-left: 270px; /* Same as the width of the sidenav */
  font-size: 18px; /* Increased text to enable scrolling */
  padding: 0px 0px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: #084887B3;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: #262626;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
<script>
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
</script>

  `);
