const viewPortHeight = window.innerHeight;

const element_2 = document.querySelector("#diseñador web")
function checkScroll() {

if(window-scrollU>= viewPortHeight/2){
    element_2.classList.add("animate__animated","animate__slideInDown")
}
if( element_2.classList.contains("animate__animated","animate__slideInDown")){
    window.removeEventListener("scroll", checkScroll)
    
}
}
window.addEventListener("scroll", checkScroll)
checkScroll()
