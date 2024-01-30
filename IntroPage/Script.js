document.addEventListener('DOMContentLoaded',function(){
    var text=document.getElementById('welcomeanimation');
    var texts=['Hi','Welcome','Namaste'];
    let index=0;
     setInterval(()=> {
        text.textContent=texts[index];
        index=(index+1)% texts.length;
     },1500);

})