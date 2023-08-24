function scrolltopage(page) {
        var scrollvalue = document.getElementById(page).offsetTop;
        window.scrollTo ({
                top: scrollvalue,
                left: 0,
                behavior: "smooth",
        })
}

function scrollfunction() {
        if (window.scrollY > 200) {
                document.getElementById("header").style.background = "#D94030"
        } else {
                document.getElementById("header").style.background = "none"
                
        }
}

function popup(displaytype) {
        document.getElementById("olusegunpopup").style.display = displaytype;
}



