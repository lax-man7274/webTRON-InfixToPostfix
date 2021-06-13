const copyButton = document.getElementById('copy-button');
// console.log('cppy button:',copyButton);
copyButton.addEventListener('click', () => {
    //    select the field to copy
    const copyText = document.getElementById('postfixExpression');
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    console.log('copy button clicked.');
    /* Copy the text inside the text field */
    document.execCommand("copy");


});