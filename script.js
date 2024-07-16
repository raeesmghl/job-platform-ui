let navLinks = document.querySelectorAll('.slide-nav .item');

navLinks.forEach(item => {
    item.addEventListener('click',()=>{
        navLinks.forEach((link)=>{
            link.classList.remove('active');
        })  
        item.classList.add('active')
    })
});
