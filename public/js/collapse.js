const learnMoreButtons = document.querySelectorAll('.learn-more');
const collapseDivisions = document.querySelectorAll('.collapse');
const hideButtons = document.querySelectorAll('.hide-btn');
// console.log(learnMoreButtons);
// console.log(collapseDivisions[0]);

learnMoreButtons.forEach((learnMoreButton, index) => {
    learnMoreButton.addEventListener('click', (e) => {
        if (collapseDivisions[index].classList.contains('hide-collapse')) {
            collapseDivisions[index].classList.remove('hide-collapse');
        } else {
            collapseDivisions[index].classList.add('hide-collapse');
        }
    })
})

hideButtons.forEach((hideButton, index) => {
    hideButton.addEventListener('click', (e) => {
        if (!collapseDivisions[index].classList.contains('hide-collapse')) {
            collapseDivisions[index].classList.add('hide-collapse');
        }
    })
})