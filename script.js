// JavaScript Document
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('menu')[0]
													
													
toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})													

$(document).ready(function () {
  $('.nav ul li:first').addClass('active');
  $('.tab-content:not(:first)').hide();
  $('.nav ul li a').click(function (event) {
		//console.log( "document loaded" );
		//$('#termcontent').load("terminology.html");
		
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.tab-content').hide();
    });
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openNav() {
	document.getElementById("myNav").style.width = "25%";
}
	
	function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  window.scrollTo(0,0);
}
	
function openNav2() {
	document.getElementById("myNav2").style.width ="25%";
}
	
	function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
  window.scrollTo(0,0);
}
	
function openNav3() {
	document.getElementById("myNav3").style.width ="25%";
  
}
	
	function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
  window.scrollTo(0,0);
}
	
	function openNav4() {
	document.getElementById("myNav4").style.width ="25%";
 
}
	
	function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
  window.scrollTo(0,0);
}

	function openNav5() {
	document.getElementById("myNav5").style.width ="25%";
}
	
	function closeNav5() {
  document.getElementById("myNav5").style.width = "0%";
  window.scrollTo(0,0);
}
	
	function openNav6() {
	document.getElementById("myNav6").style.width ="25%";
}
	
	function closeNav6() {
  document.getElementById("myNav6").style.width = "0%";
  window.scrollTo(0,0);
}
	
	function openNav7() {
	document.getElementById("myNav7").style.width ="25%";
}
	
	function closeNav7() {
  document.getElementById("myNav7").style.width = "0%";
  window.scrollTo(0,0);
}

function openNav8() {
	document.getElementById("myNav8").style.width ="25%";
}
	
	function closeNav8() {
  document.getElementById("myNav8").style.width = "0%";
  window.scrollTo(0,0);
}

