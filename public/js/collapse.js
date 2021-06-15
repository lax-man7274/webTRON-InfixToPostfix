const learnMoreButtons = document.querySelectorAll('.learn-more');
const collapseDivisions = document.querySelectorAll('.collapse');
const hideButtons = document.querySelectorAll('.hide-btn');
 const messageField=document.querySelector('.message');
console.log(messageField);
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

// while(messageField===null){
//     console.log('inside while loop');
//     messageField=document.querySelector('.message');
//     if(messageField){
//         messageField.setTimeout(()=>{
//             messageField.classList.add('hide-message');
//         },3000)
//     }
// }

if(messageField){
    setTimeout(()=>{
        messageField.classList.add('hide-message');
    },6000);
}
