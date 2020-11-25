import React from 'react';
import Iframe from 'react-iframe';
import './chatbot.css';




const chatbot = () => {

  return (
      <Iframe src="http://www.youtube.com/embed/xDMP3i36naA"
      position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "25px"}}
      >
          

      </Iframe>
  )
}

export default chatbot;