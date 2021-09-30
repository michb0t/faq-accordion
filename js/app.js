
const qcard = document.querySelectorAll(".q-card")
const arrows = document.querySelectorAll(".arrow")

for (let i = 0; i < qcard.length; i++) {
    qcard[i].addEventListener("click", function() {
        this.classList.toggle("active")
    })
}


