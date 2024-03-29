document.write(`
  <div class="header">
  <ul>
  <li><a href="/index">Home</a></li>
  <li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Section Properties</a>
  <div class="dropdown-content">
  <a href="/properties/ub">UB</a>
  <a href="/properties/uc">UC</a>
  <a href="/properties/pfc">PFC</a>
  <a href="/properties/rhs">RHS</a>
  <a href="/properties/shs">SHS</a>
  <a href="/properties/chs">CHS</a>
  </div>
  </li>
  <li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Moment Capacities</a>
  <div class="dropdown-content">
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
  </li>
  <li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Compression Capacities</a>
  <div class="dropdown-content">
  <a href="/comp/ub">UB</a>
  <a href="/comp/uc">UC</a>
  <a href="/comp/pfc">PFC</a>
  <a href="/comp/rhs350">RHS350</a>
  <a href="/comp/rhs450">RHS450</a>
  <a href="/comp/shs350">SHS350</a>
  <a href="/comp/shs450">SHS450</a>
  <a href="/comp/shs250">CHS250</a>
  <a href="/comp/shs350">CHS350</a>
  </div>
  </li>
  <li><a href="/properties/bolts">Bolts</a></li>
  <li><a href="/properties/welds">Welds</a></li>
  <li><a href="/properties/plate">Plates</a></li>
  <li class="dropdown">
  <a href="/conc/concrete" class="dropbtn">Concrete</a>
  <div class="dropdown-content">
  <a href="/conc/mesh">Mesh/Steel</a>
  </div>
  </li>
  <li class="headerLi"><a href="/interpolation">Interpolation</a></li>
  <!--<li class="finalLogo" style="float:right; background-color: #8a8a8a;"><a href="/index"><img src="../GTLOGO.png" align="center" width=200px></a></li>-->
  <li class="GT SP" style="float:right"><a href="https://glynntucker.sharepoint.com" target="_blanks">Sharepoint Home</a></li>

  </ul>
  <style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #282828;
  }

  li {
    float: left;
  }

  li a, .dropbtn {
    display: inline-block;
    color: #969696;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-weight: bold;
  }

  li a:hover, .dropdown:hover .dropbtn {
    -webkit-transition: background-color 0.25s ease-out;
    transition: background-color 0.25s ease-out;
    background-color: #084887;
  }

  li.dropdown {
    display: inline-block;
  }

body {background-color: #3C3C3C;}

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  li.finalLogo a:hover {
    -webkit-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
    background-color: #ffffff;
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #2f2f2f;
    color: white;
    text-align: center;
  }

  .rotateOrder div {
    -webkit-transform: rotate(-90.0deg);
    position: absolute;
    vertical-align: middle;
    padding-top: 5px;
    width:10px;
  }
  </style>
  </div>
  `);
