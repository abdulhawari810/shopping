
 const navItems = document.querySelectorAll(".nav-items");
 for(i=0;i<navItems.length;i++){
   if(navItems[i].href === window.location.href){
     navItems[i].classList.add('actived');
   }
 }