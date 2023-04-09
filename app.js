var btn = document.querySelector('.open-btn')
var crossbtn = document.querySelector('.x')
var modal = document.querySelector('.modal')

btn.addEventListener('click',()=>{
    modal.classList.toggle('modal')
})
crossbtn.addEventListener('click',()=>{
    modal.classList.toggle('modal')
    // console.log(modal)
})

