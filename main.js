const btn__tab = document.querySelectorAll('.btn__tab')
const all_content = document.querySelectorAll('.content__card')

console.log(btn__tab)

btn__tab.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    btn__tab.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    
    all_content.forEach(content => {
      content.classList.remove('active')
    })

    all_content[index].classList.add('active')
  })
})

