let msgArrays = [];
let notiIcon;

const icon = document.querySelector('.notify')
icon.setAttribute('class', 'icon')
icon.setAttribute('class', 'tooltip')
icon.setAttribute('data-position', 'bottom')


// const icon1 = document.querySelector('.notifyIcon')
const card = document.createElement('span')
card.setAttribute('class', 'cards')


const createCard = { cad: card }
createCard.cad.innerHTML = 'You have no new notification'

//function which set default attribute value,
//when notification is null or undefined
const iconAtrrProperty = () => {
   icon.setAttribute('data-tooltip', createCard.cad.innerText = 
   'You have no new notification, ***check again in few hours***');
}

function updateNotify() {
    return getNot(createNot)
};

class Notification {
        constructor(mType, message) {
        this.mType = mType
        this.message = message
    }
}

let createNot = new Notification('notification', 'New offer!!! GET it Now!! before 30th of this month') //You have 1 new notification

//GET MESSAGES: PUSH MESSAGE INTO THE msgArrays[] 
const getNot = (incomingNot) => {
    const defaultNot = iconAtrrProperty(incomingNot)
    let newMsg  = msgArrays.push(incomingNot) - 1;
    
    if(incomingNot !== undefined) incomingNot ? 
    icon.setAttribute('data-tooltip', createCard.cad.innerHTML = 
    newMsg - 1 + ' ' +createNot.mType) :
    icon.setAttribute('data-tooltip', createCard.cad.innerHTML = defaultNot);  
        console.log(createCard.cad.innerHTML);
        console.log({ Notification: msgArrays});

    return incomingNot;
  
}; 

myMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this)
}).bind(msgArrays);

myMethod(getNot(JSON.stringify(msgArrays.push(createNot) - 1)));
icon.addEventListener('click', updateNotify);
