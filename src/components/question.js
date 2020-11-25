var questions = [
    'Got to know you tested positive. What kind of thoughts started coming to your mind with this news?',
    'Hoping that you are aware about covid-19, and what kind of care you would take. How positive or optimistic you are feeling about recovering? If not much, what kind of thoughts are drowning you?',
    'Are you finding your family and people around you supportive and caring? If yes, then I am happy for you. If no, what might have been missing for your care?',
    'As you must be aware this disease is as deadly as our fear and dreadness out of it. How strong confident are you feeling about yourself? What might be able to help you gain more confidence?',
    'These could of next weeks are going to be tough on your body and mind. However, it does not have to be like that. You could keep your thoughts busy and occupied with few things while your body is trying to recover. Would you be willing to find support and get yourself counselling sessions as or when it might get overwhelming for you to deal? If yes, I am very happy for you. If not, what might be stopping you from seeking help?',
    'Now that you have been tested for positive, what is going in your mind ?',
    'Are you feeling stressed or anxious? ',
    'Is there any sleeplessness or loss of appetite?',
    'Do you experience irritation or frustration?',
    'Is there a constant tension on what will happen to you by the information you have about the virus?'
];


var emotions = [
'excited', 'focused', ' anxious', 'strong', 'respect', 'confident', 'hope', 
'relaxed', 'relieve', ' entitled', ' burdened', ' deprived', ' ecstatic', ' obsessed', ' independent', 
'charming', 'attracted', 'attached', 'bored', 'hurted', 'esteemed', 'tensed', 'angry', 'frustrated',
 'belittled', 'delighted', 'safe', 'apathetic', ' fearless', ' surprise', ' fearful', 'stressful', 'adequate', 
'depressed', 'help', 'cheated', 'loved', 'motivated', 'hated', 'lost', 'alone', 'codependent', 'embarrassed', 'happy', 
'sad',  'admire', 'demoralized'

];

var prefix = [
        'Do not worry Remember one thing that','You should know that','Do not forget that','someone said that',
        'It is said that','Remember'
      ];
var after_quotes = [
      'now can you please tell','now please explain','so now please answer this','and please answer the given question',
      'ok now please tell me','so always stay happy and please explain me'
      ];

var num = 0;
var output = document.querySelector("#result");

var check = 0;
export default function Nextquestion() {
  var input = document.getElementById("textarea").value;
  var check = 0
  var ele = String(input).toLowerCase();
  var i;
  for (i = 0; i < emotions.length; i++) {
    if(ele.includes(String(emotions[i])))
    {
      check = 1;
    }

  }

  num++;
  if(input==="")
  {
    const speech_write = new SpeechSynthesisUtterance();
    speech_write.text = 'Please Type your answer';
    window.speechSynthesis.speak(speech_write);
  }
  else
  {
  if(num===10)
  {
    output.innerHTML = "It's nice to talk You :)";
    document.getElementById("textarea").value="";
    const speech_write = new SpeechSynthesisUtterance();
    speech_write.text = "It's nice to talk with you ";
    window.speechSynthesis.speak(speech_write);
    /*element deletion*/
    var element = document.getElementById("b");
   	element.parentNode.removeChild(element);
    var element1 = document.getElementById("textarea");
    element1.parentNode.removeChild(element1);
    var element2 = document.getElementById("text");
    element2.parentNode.removeChild(element2);
    document.getElementById("a").style.visibility = "visible";
   	
  }
  else
  {
    if(check===1){
      
      
      var pre_string = prefix[Math.floor(Math.random()*prefix.length)];
      var post_quote_string  = after_quotes[Math.floor(Math.random()*after_quotes.length)];

      document.getElementById("text").value+=document.getElementById("textarea").value;
      output.innerHTML =pre_string+" "+"Quotes"+" "+post_quote_string+' '+questions[num];
      document.getElementById("textarea").value="";
      const speeches = new SpeechSynthesisUtterance();
      var voices = speechSynthesis.getVoices();
      speeches.volume=2;
      speeches.text = pre_string+"Quotes"+post_quote_string+questions[num];
      window.speechSynthesis.speak(speeches);
      document.getElementById("textarea").focus();
    }
    else{
      document.getElementById("text").value+=document.getElementById("textarea").value;
      output.innerHTML = questions[num]+"Quotes";
      document.getElementById("textarea").value="";
      const speeches = new SpeechSynthesisUtterance();
      var voices = speechSynthesis.getVoices();
      speeches.volume=2;
      speeches.text = questions[num]+"Quotes";
      window.speechSynthesis.speak(speeches);
      document.getElementById("textarea").focus();
    }
  }
}
}
