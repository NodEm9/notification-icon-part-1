const msgArrays = [];

//function which set default attribute value,
//when notification is null or undefined
const iconAtrrProperty = () => {
    icon.setAttribute('data-tooltip', createCard.cad.innerText =
        'You have no new notification');
}

class Notification {
    constructor(mType, message, date) {
        this._mType = mType
        this._message = message
        this._date = date
    }

    get mType()    { return this._mType   }
    set mType(v)   { this._mType = v      }
    get message()  { return this._message }
    set message(v) { this._message = v    }
    get date()     { return this._date    }
    set date(v)    { this._date = v       }
}

const createNot = new Notification() //You have 0 new notification 
const create2Not = new Notification('', 'New offers!!, Hurry GET it Now!!!', new Date().toDateString()) //You have 1 new notification 

//Set the 3 object's value for createNot and create2Not.mType 
createNot.mType = 'notification'
createNot.message = 'Notification message has been mutated'
createNot.date =  new Date().toDateString()
create2Not.mType = 'new notifications'


const icon = document.querySelector('.notify')
icon.setAttribute('class', 'icon')
icon.setAttribute('class', 'tooltip')
icon.setAttribute('data-position', 'bottom')

const card = document.createElement('span')
card.setAttribute('class', 'cards')


const createCard = { cad: card }
createCard.cad.innerHTML = 'You have no new notification'

//GET MESSAGES: PUSH MESSAGE INTO THE msgArrays[] 
const getNot = (incomingNot) => {
    const defaultNot = iconAtrrProperty(incomingNot)
    let newMsg = msgArrays.push(incomingNot) - 1;
    const specCard = document.querySelector('.notifyCard2');
    console.log(incomingNot)

    //Check if incomingNot is undefined and return default text and 
    //if it is defined it means we have new message then return the message
    if ( incomingNot !== undefined ) incomingNot ?
        icon.setAttribute('data-tooltip', createCard.cad.innerHTML.replace = 
        newMsg  + ' ' +create2Not.mType+ ' ' + createNot.date+ ' ' +` Messag: ${createNot.message}`) : 
        icon.setAttribute('data-tooltip', createCard.cad.innerHTML = defaultNot)

        specCard.style.color = 'red'
        specCard.style.float = 'left'
        specCard.textContent = newMsg 
   
    return incomingNot;

};

//Method have our default text and displays it before 
//the button is click or before new notification is recieved
myMethod = (function () {}).bind(getNot());

const updateNotify = () => getNot(createNot);
icon.addEventListener('click', updateNotify);