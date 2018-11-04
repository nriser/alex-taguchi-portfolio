function transparentNav() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("transparent-nav").style.backgroundColor = "rgba(0,100,172,.6)"
    } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        document.getElementById("transparent-nav").style.backgroundColor = "rgba(0,100,172,1)"
    }
};

function showButtonOnScroll() {
    var topButton = document.getElementById("fixedTop");
    if (document.body.scrollTop > 365 || document.documentElement.scrollTop > 365) {
        topButton.style.opacity = 1;
        topButton.style.transition = "opacity 1s";
        topButton.style.cursor = "pointer"
    } else if (document.body.scrollTop < 365 || document.documentElement.scrollTop < 365) {
        topButton.style.opacity = 0;
        topButton.style.transition = "opacity 0.05s";
        topButton.style.cursor = "default"
    }
}

function toggleSymbol() {
    var labelArray = document.getElementsByClassName("abstractBtn");
    for (var i = 0; i < labelArray.length; i++) {
        labelArray[i].onclick = function() {
            if (this.innerHTML === "[+] Abstract") {
                this.innerHTML = "[-] Abstract"
            } else {
                this.innerHTML = "[+] Abstract"
            }
        }
    }
}

function featuredExpand() {
    if (window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub1") {
        var inputButton1 = document.getElementById("node5");
        inputButton1.click();
        document.getElementById("pubAbstract1").innerHTML = "[-] Abstract"
    } else if (window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub2") {
        var inputButton2 = document.getElementById("node9");
        inputButton2.click();
        document.getElementById("pubAbstract2").innerHTML = "[-] Abstract"
    } else if (window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub3") {
        var inputButton3 = document.getElementById("node12");
        inputButton3.click();
        document.getElementById("pubAbstract3").innerHTML = "[-] Abstract"
    }
}

function yearSelect() {
    var collapsibleList = document.getElementById("collapsibleList"),
        yearFilter = document.getElementById("yearFilter");
    yearFilter.onchange = function() {
        $(".list").slideUp();
        switch (yearFilter.value) {
            case "2013":
                $(".year2013").slideDown();
                break;
            case "2014":
                $(".year2014").slideDown();
                break;
            case "2015":
                $(".year2015").slideDown();
                break;
            case "2016":
                $(".year2016").slideDown();
                break;
            case "2017":
                $(".year2017").slideDown();
                break;
            case "2018":
                $(".year2018").slideDown();
                break;
            default:
                $(".list").slideToggle();
                break
        }
    }
};
$(document).ready(function() {
    $('.scroll').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash
            })
        }
    })
});
window.onload = function() {
    if (window.location.href == "http://www.mit.edu/~taguchi/publications.html" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#top" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub1" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub2" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub3" || window.location.href ==
    "file:///Users/nriser/Desktop/Alex/Websites/alex-taguchi-portfolio/publications.html") {
        toggleSymbol();
        featuredExpand();
        showButtonOnScroll();
        yearSelect()
    } else if (window.location.href == "http://www.mit.edu/~taguchi/fitness.html") {
        showButtonOnScroll()
    } else {}
};
window.onscroll = function() {
    if (window.location.href == "http://www.mit.edu/~taguchi/publications.html" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#top" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub1" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub2" || window.location.href == "http://www.mit.edu/~taguchi/publications.html#featured-pub3" || window.location.href == "http://www.mit.edu/~taguchi/fitness.html") {
        transparentNav();
        showButtonOnScroll()
    } else {
        transparentNav()
    }
}
