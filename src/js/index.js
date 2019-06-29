const pages = [...document.querySelectorAll(".page")]

let touchY = 0
let isDown = false
document.ontouchstart = e => {
    touchY = e.changedTouches[0].clientY
}
document.ontouchend = e => {
    isDown = e.changedTouches[0].clientY - touchY < 0
    console.log(e.changedTouches[0].clientY - touchY)
    console.log(isDown)
    isScroll()
}

document.onmousewheel = isScroll

function isScroll(e) {
    let page1ClassList = pages[0].classList
    let page2ClassList = pages[1].classList
    try {
        if (isDown || e.deltaY >= 50) {
            if (!page1ClassList.contains("remove")) {
                page1ClassList.add("remove")
                page2ClassList.remove("remove")
                setTimeout(() => {
                    pages[0].classList.remove("active")
                    pages[1].classList.add("active")
                }, 450)
            }
        } else if (!isDown || e.deltaY <= -50) {
            if (page1ClassList.contains("remove")) {
                page1ClassList.remove("remove")
                page2ClassList.add("remove")
                setTimeout(() => {
                    pages[1].classList.remove("active")
                    pages[0].classList.add("active")
                }, 450)
            }
        }
    } catch (err) {
        if (page1ClassList.contains("remove")) {
            page1ClassList.remove("remove")
            page2ClassList.add("remove")
            setTimeout(() => {
                pages[1].classList.remove("active")
                pages[0].classList.add("active")
            }, 500)
        }
    }
}
