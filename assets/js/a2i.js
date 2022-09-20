// Missions Initiatives Box Hidden on Expand
const mission_card = document.querySelectorAll('.mission-card')

mission_card.forEach(item => {
    item.addEventListener('click', e => {
        e.target.parentElement.children[1].style.transition = '.5s all ease-in-out'
        if(e.target.parentElement.classList.contains('collapsed')) {
            e.target.parentElement.children[1].style.transform = 'translateX(0)'
        } else {
            e.target.parentElement.children[1].style.transform = 'translateX(' + (e.target.parentElement.children[1].offsetWidth + 1) + 'px)'
        }

        (() => {
            const collapsedEl = document.querySelectorAll('.mission-card.collapsed')

            collapsedEl.forEach(cEl => {
                cEl.children[1].style.transform = 'translateX(0)'
            })
        })()
    })
})