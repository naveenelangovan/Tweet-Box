const tweetElement = document.querySelector('#text');
const formElement = document.querySelector('#form');
const outputElement = document.querySelector('#post');
const successMsg = document.querySelector("#spn1");
const chrmax = document.querySelector('#spn2');
const btnElement = document.querySelector('#btn');

const characterslengthElement = document.querySelector('#characters-length');
const characterslengthoutput = document.querySelector('#characters-length-output');


function handleInput (event) {
    event.preventDefault();
    const inputValue = event.target.value;
    const inputValLength = inputValue.length;
    characterslengthElement.textContent = inputValLength;

    if (inputValLength > 160) {
        chrmax.classList.remove('spn');
        
    } else {
        chrmax.classList.add('spn');
    }
    
    if (inputValLength <= 160) {
        characterslengthElement.textContent = inputValLength;
        characterslengthoutput.style.color = 'green';
        btnElement.removeAttribute('disabled')
    } else {
        characterslengthElement.textContent = 160-inputValLength;
        characterslengthoutput.style.color = 'red';
        btnElement.setAttribute('disabled','disabled')
    }
    
   
}
tweetElement.addEventListener('keyup',handleInput)

function postTweet(event) {
    event.preventDefault();
    const tweetValue = tweetElement.value;
    if(tweetValue!=='') {
        const p = document.createElement('p');
        const textnode = document.createTextNode(`${tweetValue}`);
        p.appendChild(textnode);
        outputElement.appendChild(p);
        tweetElement.value = '';
        successMsg.classList.remove('spn');
    }
    else {
        successMsg.classList.add('spn');
    }
    
}
formElement.addEventListener('submit',postTweet);