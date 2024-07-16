// slidebar navItems functionality. 
// i added a functionality (hover effect) in css
// but when you are active, you need this javascript code and a css class .active;


let navLinks = document.querySelectorAll('.slide-nav .item');

navLinks.forEach(item => {
    item.addEventListener('click',()=>{
        navLinks.forEach((link)=>{
            link.classList.remove('active');
        })  
        item.classList.add('active')
    })
});















// bell icon functionality.
// on click i want to fill the bell icon
// boxicon has bx class for lite-element (only bordered) and bxs class for filled-elements


let bellIcon = document.querySelector('#bell-icon');

bellIcon.addEventListener('click',()=>{
    bellIcon.classList.toggle('bxs-bell');
    bellIcon.classList.toggle('bx-bell');
    console.log(bellIcon.style.color)
})















// when you click the menu button 

let menuToggle = document.querySelector('#menuToggle');
let slideBar = document.querySelector('.slidebar');

menuToggle.addEventListener('click',()=>{
    slideBar.style.translate = '0px';
})



// but if you want to send it back (translate:-100%)
// we did not use a sepcial 'cancle button' for sending it back, either we used the whole document
// if user clicks on document (expect menu button or slidebar), slidebar gets back

document.addEventListener('click',(event)=>{
    // if you click on the menu button or the slidebar, isClickInside becomes true;
    let isClickInside = slideBar.contains(event.target) || menuToggle.contains(event.target);

    // if isClickInside is true; it is visible on the page
    if(isClickInside){
        slideBar.style.translate= '0px';
    }else{
        // else if you dont click on the slidebar or menu button (you click anywhere on the page) the slideBar will move -100% left and will not be visible;

        slideBar.style.translate = '-100%'
    }
})












// saveButton functionality
// same concept as bell icon (as we are changing a single class)
let saveJobBtns = document.querySelectorAll('.card-header>i');


saveJobBtns.forEach((saveBtn)=>{
    saveBtn.addEventListener('click',()=>{
        saveBtn.classList.toggle('bx-bookmark-alt');
        saveBtn.classList.toggle('bxs-bookmark-alt');
    })
})





















// script for filter section checkboxes

let checkBoxes = document.querySelectorAll('.checkbox div');

checkBoxes.forEach((div)=>{
    let checkbox = div.children[0];
    let label = div.children[1];

    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            label.style.color = 'var(--dark)';
            label.style.fontWeight = '600';
        }else{
            label.style.color = 'var(--grey)'
            label.style.fontWeight = '400';
        }
    })
});

