require('dotenv').config()
const Trello = require("trello");
if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token')
  }
  

let trello = new Trello(process.env.KEY, process.env.TOKEN);
let idList = process.env.LIST_ID
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX", idList,
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });

   //Callback
trello.getCardsOnList(idList,
   function (error, ListCard) {
    if (error) {
      console.log('Could not view list card:', error);
    }
    else {
      console.log('List Card:', ListCard);
    }
  });
   

  