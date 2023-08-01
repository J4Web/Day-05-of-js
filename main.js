
const panels=document.querySelectorAll('.panel')

// console.log(panels);
function toggleOpen(){
    console.log(this);
    this.classList.toggle('open');
}

function toggleActive(e)
{
    //see how to get whats changed in transition
    // console.log(e.propertyName);

    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel=> panel.addEventListener('click',toggleOpen))

panels.forEach(panel=> panel.addEventListener('transitionend',toggleActive))