function transparentNav(){document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("transparent-nav").style.backgroundColor="rgba(0,100,172,.6)":(document.body.scrollTop<100||document.documentElement.scrollTop<100)&&(document.getElementById("transparent-nav").style.backgroundColor="rgba(0,100,172,1)")}function showButtonOnScroll(){var t=document.getElementById("fixedTop");document.body.scrollTop>365||document.documentElement.scrollTop>365?(t.style.opacity=1,t.style.transition="opacity 1s",t.style.cursor="pointer"):(document.body.scrollTop<365||document.documentElement.scrollTop<365)&&(t.style.opacity=0,t.style.transition="opacity 0.05s",t.style.cursor="default")}function toggleSymbol(){for(var t=document.getElementsByClassName("abstractBtn"),e=0;e<t.length;e++)t[e].onclick=function(){"[+] Abstract"===this.innerHTML?this.innerHTML="[-] Abstract":this.innerHTML="[+] Abstract"}}function featuredExpand(){if("http://www.mit.edu/~taguchi/publications.html#featured-pub1"==window.location.href)document.getElementById("node9").click(),document.getElementById("pubAbstract1").innerHTML="[-] Abstract";else if("http://www.mit.edu/~taguchi/publications.html#featured-pub2"==window.location.href){document.getElementById("node5").click(),document.getElementById("pubAbstract2").innerHTML="[-] Abstract"}else if("http://www.mit.edu/~taguchi/publications.html#featured-pub3"==window.location.href){document.getElementById("node2").click(),document.getElementById("pubAbstract3").innerHTML="[-] Abstract"}}function yearSelect(){document.getElementById("collapsibleList");var t=document.getElementById("yearFilter");t.onchange=function(){switch($(".list").slideUp(),t.value){case"2013":$(".year2013").slideDown();break;case"2014":$(".year2014").slideDown();break;case"2015":$(".year2015").slideDown();break;case"2016":$(".year2016").slideDown();break;case"2017":$(".year2017").slideDown();break;case"2018":$(".year2018").slideDown();break;default:$(".list").slideToggle()}}}$(document).ready(function(){$(".scroll").on("click",function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},800,function(){window.location.hash=e})}})}),window.onload=function(){"http://www.mit.edu/~taguchi/publications.html"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#top"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub1"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub2"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub3"==window.location.href||"file:///Users/nriser/Desktop/Alex/Websites/alex-taguchi-portfolio/publications.html"==window.location.href?(toggleSymbol(),featuredExpand(),showButtonOnScroll(),yearSelect()):"http://www.mit.edu/~taguchi/fitness.html"==window.location.href&&showButtonOnScroll()},window.onscroll=function(){"http://www.mit.edu/~taguchi/publications.html"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#top"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub1"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub2"==window.location.href||"http://www.mit.edu/~taguchi/publications.html#featured-pub3"==window.location.href||"http://www.mit.edu/~taguchi/fitness.html"==window.location.href?(transparentNav(),showButtonOnScroll()):transparentNav()};
