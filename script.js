const icon = document.querySelector('.notify')
icon.setAttribute('class', 'icon')
const icon1 = document.querySelector('.notifyIcon')

let msgArrays = [];
let notiIcon;

const card = document.createElement('span')
card.setAttribute('class', 'cards')
icon.setAttribute('class', 'tooltip')
icon.setAttribute('data-position', 'bottom')

const createCard = { cad: card }
createCard.cad.innerHTML = 'You have no new notification'

//function which set default attribute value,
//when notification is null or undefined
const iconAtrrProperty = () => {
   icon.setAttribute('data-tooltip', createCard.cad.innerText = 
   'You have no new notification, ***check again in few hours***');
}


function notiDisplay() {
    let newCard = createCard.cad;
    /** 
        If our card element has a text content and
        is not empty, then we docorate it
    **/
    if(newCard !== null){
        // card.textContent = 'You have no noitification'
        card.style.width = '200px'
        card.style.padding = '8px'
        card.style.position = 'absolute'
        card.style.background = 'purple'
        card.style.color = '#fff'
        card.style.zIndex = '5'
        icon.textContent = card
        card.style.right = '0'
        card.style.top = '0'
        card.style.marginTop = '33px'
        card.style.marginRight = '38px'
        card.style.transition = 'all 1s .5s ease-in-out'
    }

    return newCard
  
};

function updateNotify() {
    return getNot(createNot)
};

class Notification {
        constructor(id, mTime, mType) {
        this.id = id
        this. mTime = mTime
        this.mType = mType
    }

    // get message() {}
}

let createNot = new Notification('1', '', 'notification') //You have 1 new notification

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
