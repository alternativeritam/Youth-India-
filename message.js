

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

var person = "";
var gender = "";

function myFunction() {
  person = prompt("Please enter your name");
  if(person=="")
  {
    person=prompt("Please enter your name");
  }
  else
  {
    gender=prompt("Please enter your gender : male , female or other");
    gender= gender.toLowerCase();
    if(gender=="male" || gender=="female" || gender=="other")
    {
        alert("thank you");
    }
    else
    {
      gender = prompt("Please enter your gender : male , female or other");
    }
  }
}


function appendMessage(name, img, side, text) {
  var msgerForm =  document.getElementById("msger-inputarea");
var msgerInput = document.getElementById("msger-input");
var msgerChat = document.getElementById("msger-chat");
  //   Simple solution for small apps
  var msgHTML = `
    <div id="msg ${side}-msg">
      <div id="msg-img" style="background-image: url(${img})"></div>

      <div id="msg-bubble">
        <div id="msg-info">
          <div id="msg-info-name">${name}</div>
          <div id="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div id="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}


function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://www.messengerpeople.com/wp-content/uploads/2018/08/erfolge-chatbots.png";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const Woman_Img = "https://lh6.googleusercontent.com/proxy/s9SR9hISaF3PUNBPpE9UjRyE1a8Ag34QDDuIoiHxSG9WqthRWMaVYR3evxU03bHDRNaSa7l-E5lEuB9qFM1zSrk1vFtSeb_fVct32NwzHoPL=s0-d";
const Other_img = "https://www.netclipart.com/pp/m/147-1478208_smiley-png-smiley-face-png.png";
const BOT_NAME = "BOT";

function hello(){
  var msgerForm =  document.getElementById("msger-inputarea");
var msgerInput = document.getElementById("msger-input");
var msgerChat = document.getElementById("msger-chat");
  
  const msgText = msgerInput.value;
  gender = gender.toLowerCase();
  if(gender=="male"){
  appendMessage(person, PERSON_IMG, "right", msgText);
}
  else if(gender=="female")

  {
    appendMessage(person, Woman_Img, "right", msgText);
  }
  else
  {
    appendMessage(person, Other_img, "right", msgText);
  }
  msgerInput.value = "";

  botResponse();
}


function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
