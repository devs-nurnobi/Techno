var nav=document.getElementById('nav');
    window.onscroll=function(){
        if(window.pageYOffset > 100){
            nav.style.background= "rgba(1,1,1, .9)";
        }
        else{
            nav.style.background="transparent";
        }
    }
