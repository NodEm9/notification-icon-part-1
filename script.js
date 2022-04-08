const msgArrays = [];

//function which set default attribute value,
//when notification is null or undefined
const iconAtrrProperty = () => {
  icon.setAttribute('data-tooltip', createCard.cad.innerText = 'You have no new notification');
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
const create2Not = new Notification({mType: '', message: 'New offers!!, Hurry GET it Now!!!', date: new Date().toDateString()}) //You have 1 new notification 

//Set the 3 object's value for createNot and create2Not.mType 
createNot.mType = 'notification'
createNot.message = "Hi Mr. Greg! You've got a new notification"
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
        const defaultNot = iconAtrrProperty();
        let newMsg = msgArrays.push(incomingNot) - 1;
        const specCard = document.querySelector('.notifyCard2');

        let combine = function(msg) {
            if(msg) {
              createCard.cad.innerHTML.replace = icon.setAttribute('data-tooltip',
              newMsg + ' ' +create2Not.mType+ ' ' + createNot.date+ ' ' +` Messag: ${createNot.message}`) 
            }
          };

        //Check if incomingNot is undefined and return default text and 
        //if it is defined it means we have new message then return the message
        if ( incomingNot !== undefined ) incomingNot ? combine(incomingNot) : defaultNot;

        // let not = combine(incomingNot);
        let notMsg = localStorage.setItem(`${newMsg}`, `${createNot.message}`)
        let notObj = []
        const newNot = localStorage.getItem(notMsg)
        notObj.push(newNot)
        
          console.log(notObj)
          

            specCard.textContent = newMsg 
            specCard.style.color = 'red'
            specCard.style.padding = "16px";
            specCard.style.top = "left";
            specCard.style.transform = "translate(-40px, -19px)";
            specCard.style.position = "absolute";
            icon.appendChild(specCard)
};

//Method have our default text and displays it before 
//the button is click or before new notification is recieved
myMethod = (function () {}).bind(getNot());

const updateNot = () => getNot(createNot);
icon.addEventListener('click', updateNot);