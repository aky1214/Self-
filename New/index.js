function pushPull(){
    var a = document.getElementById("arrow");
    var b = document.getElementById("shide");
    var c = document.getElementById("arrow-div");
    if(a.classList.contains('right')){
        a.classList.add("left");
        b.classList.add("show");
        a.classList.remove("right");
        b.classList.remove("hide");
        c.style.left="70px";
    }else{
        a.classList.remove("left");
        b.classList.remove("show");
        a.classList.add("right");
        b.classList.add("hide");
        c.style.left="0px";
    }
}

//
function openClose(){
    var menu = document.getElementById('menu');
    var menubar = document.getElementById('menubar');
    if(menu.classList.contains('hide')){
        menu.classList.add('show');
        menu.classList.remove('hide');
        menubar.style.display = "flex";
    }else{
        menu.classList.add('hide');
        menu.classList.remove('show');
        menubar.style.display = "none";
    }
}
//
