function changeToMore() {
    var header = document.getElementsByClassName("header")[0];
    var nav_bar = document.getElementsByClassName("nav-bar")[0];
    var more = document.getElementsByClassName("more")[0];
    header.setAttribute("id","display_none");
    nav_bar.setAttribute("id","display_none");
    more.setAttribute("id","display_block");
}
function changeToMenu() {
    var more = document.getElementsByClassName("more")[0];
    var header = document.getElementsByClassName("header")[0];
    var nav_bar = document.getElementsByClassName("nav-bar")[0];
    more.setAttribute("id","display_none");
    header.setAttribute("id","display_block");
    nav_bar.setAttribute("id","display_block");
}