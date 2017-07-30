'use strict'

const link = document.querySelector('.show')
const content = document.querySelector('.enquiries')

content.classList.add('hide-text')

// link.addEventListener('click', function(){
// content.classList.toggle('hide-text')
// })
//to prevent event
link.addEventListener('click', function(e){
  e.preventDefault()//prevent default behaviour of 'a' element
  content.classList.toggle('hide-text')
})
