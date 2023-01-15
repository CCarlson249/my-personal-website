function lighton(){
   var el = document.getElementById("overlay")
    if (el && el.style){
        el.style.display = el.style.display != 'none'? 'none': ''
    };
}