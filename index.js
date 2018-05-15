const TelegramBot = require('node-telegram-bot-api');
const token = '577241356:AAHtUR7DXRLPbPVJxU4w6R05ef7vMaLxWK0';
const bot = new TelegramBot(token, {polling: true});
 
var names = new Array('Саня', 'Чайка', 'Лера', 'Маша', 'Антон'); 
var quastions_count = new Array(0, 0, 0, 0, 0);

/*bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 
 
  bot.sendMessage(chatId, resp);
});*/


var Plus = function (msg){

  if(msg.indexOf('+') >= 0){
    return true;
  }

  else{
    return false;
  }

} 


bot.on('message', (msg) => {

  const chatId = msg.chat.id;

  if(!msg.from.is_bot){

    names.forEach (function(item,index,array){
      
        if(msg.text.toLowerCase().indexOf(item.toLowerCase()) >= 0){
          var count = parseInt(msg.text.replace(/\D+/ig, ' '));
          
          if(!isNaN(count)){
            
            if(Plus(msg.text)){

              quastions_count[index] += count;
              bot.sendMessage(chatId, item + "  " + quastions_count[index]);

            }
            else{
              
              quastions_count[index] -= count;
              bot.sendMessage(chatId, item + "  " + quastions_count[index]);

            }
          }
          else{
            bot.sendMessage(chatId, item + "  " + quastions_count[index]);
          }
        }

    });

  }

});