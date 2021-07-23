let nav=$('.nav');
let logo=$('.logo')
logo.click(function(){
    nav.toggle('.click')
});
let header=document.querySelector('header');
function changeHeader(){
    let scrollY=window.pageYOffset;
    if(scrollY> header.clientHeight)
    {
        header.classList.add('bg')
    }
    else{
        header.classList.remove('bg')
    }
}
document.addEventListener('scroll',function(){
    changeHeader();
})
//loading 
$(window).on('load',function(){
    $('.loading').fadeOut(3000);
})
// animation csroll
AOS.init();