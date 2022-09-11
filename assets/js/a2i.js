const a2iHeaderSearchFormInp = document.querySelector('.a2i-header-search-form-input')
const a2iHeaderSearchFormBtn = document.querySelector('.a2i-header-search-form-btn')

a2iHeaderSearchFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    a2iHeaderSearchFormBtn.classList.toggle('a2i-header-search-form-input-visible')
})