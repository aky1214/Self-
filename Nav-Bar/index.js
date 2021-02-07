// function responsive(x){
//     if(x.matches){
//         document.getElementById("menu").style.display ="none";
//     }elseif(){
//         document.getElementById("menu").style.display = "flex";
//         document.getElementById("menu").style.flexDirection ="row";
//     }
// }
// var x = window.matchMedia ("max-width:800px")
// responsive(x)
// x.addEventListener(responsive)

// function showHide(){
//     var show = document.getElementById("menu");
//     var showBtn = document.getElementById("menu-btn");
//     if(show.style.width <= "800px"){
//         show.classList.add("show-menu");
//         show.classList.remove("hide-menu");
//     }else{
//         show.classList.remove("show-menu");
//         show.classList.add("hide-menu");
//     }
// }

// function shw(){
//     var showBtn = document.getElementById("menu-btn");
//     if(showBtn.style.display =="none"){
//         document.getElementById("menu").style.display ="flex";
//     }else{
//         document.getElementById("menu").style.display = "none";
//     }
// }
// function showHide(){
//     var show = document.getElementById("menu");
//     if(show.style.display == "none"){
//         show.style.display ="flex";
//         show.style.flexDirection ="column";
//     }else{
//         show.style.display = "none";
//     }
// }
function resUp(){
    if (window.innerWidth <= 800){
        document.getElementById("navbar").classList.add("hide");
        document.getElementById("navbar").classList.remove("show");
    }else{
        document.getElementById("navbar").classList.add("show");
        document.getElementById("navbar").classList.remove("hide");
    }
}
window.addEventListener('resize', resUp);
window.addEventListener('load', resUp);

function resHide(){
    var doc = document.getElementById("navbar");
    if(doc.classList.contains("hide")){
        doc.classList.add("show");
        doc.classList.remove("hide");
    }else{
        doc.classList.remove("show");
        doc.classList.add("hide");
    }
}
