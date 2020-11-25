import React from 'react'
import './Home.css';
import Card from './CardUI';
import { NavLink } from 'react-router-dom';
import img1 from "../assets/blog-august-1200x480.jpg"; 
import person3 from '../components/yf_logo1.png';
import img2 from "../assets/ehealth-tech.png";
import img4 from "../assets/download.png";
import img5 from "../assets/MythsInfographic-(002)_800.jpg";
const Home = () => {
    return (
        <>



        <div className="container">
        <div className="row header_row">
            <div className="col-sm header11">
            <h1 className="your_friend same">YOUR FRIEND.</h1>
            <h4 className="same yif">An Initiative by <span className="y">Youth</span> <span className="i">India</span> <span className="f">Foundation</span></h4>
            </div>
            <div className="col-sm header11 header-10">
            <img src={person3} width="300" height="300" alt="" loading="lazy"/>
            </div>
        </div>
    
    </div>
        <div className="container">
        <div className="about1">
            <h1 className="head_about">ABOUT CELLS</h1>
            <p>
               The Your Friend Initiative is a social enterprise initiative. It comprises of a team of junior and senior representatives under the supervision of trained therapists, all of whom are under a non disclosure agreement and are dedicated to handling all the cases they get with utmost care and delicacy, no judgement and by respecting anonymity and privacy. The severity of the case determines who will handle the particular case from junior representatives to senior representatives and trained therapists. 

India is a country abundant in dogmas, stereotypes and stigmas which make the mental health scenario less than ideal for us. The Your Friend Initiative aims to address and dissolve all of these taboos from their root. 
Tough school environments that promote bullying and peer pressure as well as stressful work environments often lead to stress and anxiety illnesses even at a very tender age. These problems can stem from any situation or experience that we face and then affect our daily life and functioning and also have other dangerous consequences like suicide and self-harm. 

The Your Friend Initiative aims to target these breeding grounds and provide a therapist to address these problems as well as train faculty members and students so that we can take small steps towards making a safe haven where everyone is heard and accepted. 

The plan would be to assign and M.Phil graduate level therapist to the institution to help the students work through issues, or just vent and also being a trained mind, pick out any serious problems and give them the attention they need. 
Alongside, it is important to spread awareness about mental health to sow the seed of acceptance and compassion so that it is a better environment for people facing problems. In light of this, there will be mental health awareness sessions to teach students about the dire consequences of bullying, stress and peer pressure. 

An incumbent training program will be set up for BA/MA Psychology students to volunteer to help their juniors and peers where they will provide counselling in the primary cases and deliver more serious and complicated cases to the therapist. This valuable internship experience will also provide Letters of Recommendation and Certificates of Completion.
The same process will be applied for non-psychology institutions where the presence of the counsellor and team of trained professionals will benefit the nature and credibility of the institution as well as please guardians with an accepting and mentally safe environment where their child can unlock their true potential without any fear. 

This initiative will attract the youth through their vibrant advertising on social media sites. Webinars and brochures will throw light on the need for such a program. 

A feedback form or questionnaire will be provided to people after each session where all the concerns will be addressed and fixed with immediate effect to achieve our goal efficiently. 

Your Friend believes in the deliverance of value for money and since every institution is unique in its needs, number of students , demographic and location a customised plan will be drawn up for each client to promote the higher value and community welfare that both Youth India Foundation and the client institution will derive from this highly beneficial society-oriented social entrepreneurship program.

            </p>
               <NavLink to="/aboutcells" class="button1">Learn more</NavLink>
        </div>
    </div>


    <div id="slider">
   <input type="radio" name="slider" id="slide1"/>
   <input type="radio" name="slider" id="slide2"/>
   <input type="radio" name="slider" id="slide3"/>
   <input type="radio" name="slider" id="slide4"/>
   <div id="slides">
      <div id="overflow">
         <div className="inner">
            <div className="slide slide_1">
               <div className="slide-content">
                  <h2>Slide 1</h2>
                  <p>Content for Slide 1</p>
               </div>
            </div>
            <div className="slide slide_2">
               <div className="slide-content">
                  <h2>Slide 2</h2>
                  <p>Content for Slide 2</p>
               </div>
            </div>
            <div className="slide slide_3">
               <div className="slide-content">
                  <h2>Slide 3</h2>
                  <p>Content for Slide 3</p>
               </div>
            </div>
            <div className="slide slide_4">
               <div className="slide-content">
                  <h2>Slide 4</h2>
                  <p>Content for Slide 4</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>






    <div className="container-fluid nav bg bgstay">
        <div className="row">
        <div className="col-10 mx-auto">
        <h1 className="head1">E-Mental Health Services</h1>
        <p className="e_mental">
           Healing takes time and asking for it is a courageous step, so we at Your friend are asking you to trust us with your thoughts and problems so that we can help you be better because  healthy minds make a better world.

Dealing with mental disorders is not easy and we understand that,thus we as an organisation provide mental health webinars, free mental health services, campaign and a healthy environment for you to speak out your mind. we want to make sure that you receive the care you deserve with the help and guidance of certified therapists and stict confidential policy for your comfort.

For the times you feel you can't talk to your friends or family with the fear of being judged or humiliated, and for the times you don't want any advice but just an ear to hear every thought hovering on your mind, 'Your Friend' is just a click away. Reach out to us and we are here to help you 24/7 because your mental health is our responsibilty. We have therapists onboard with us to provide you with the best help possible. We might not be there with you, but we're always there for you, through highs and lows, and through thick and thin.

The psychologists onboard are licenced and experienced professionals, providing the best possible help. The free e-mental health services are open to everyone who needs a place to vent out and talk about your problems. Give yourselves a chance to be yourself. Reach out to us about anhthing you'd like to unleash. We provide non-judgemental, confidential and ethical helping environment.

        </p>
                   </div>
        </div></div>

        <div className="container-fluid d-flex align-items-center">
                <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                    <div className="col-sm">
                    <NavLink to="/campaigns">
                        <Card  imgsrc={img1} title={"Campaigns"} desc={""} />
                        </NavLink>
                    </div>
                    <div className="col-sm">
                    <NavLink to="/mentalhealthservices">
                        <Card  imgsrc={img2} title={"Mental Health Services"} desc={" Mental health is the successful performance of the mental function resulting in productive activities"} />
                        </NavLink>
                    </div>
                    </div>
                    <div className ="container-fluid nav bg bgstay">
        <div className="row">
        <div className="col-10 mx-auto">
        <h1 className="head1">Career Empowerment</h1>
        <p className="e_mental">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id iaculis turpis. Sed non arcu vitae lorem sagittis consequat. Praesent vel venenatis magna, nec iaculis purus. Pellentesque id mattis tellus, consequat porttitor nunc. Aenean dictum dapibus orci, nec pharetra neque fringilla ac. Vivamus id erat imperdiet, bibendum ex non, sollicitudin odio. Integer laoreet egestas lorem, sed dictum enim rutrum eu. Mauris ac finibus ante. Phasellus eget maximus augue. Proin aliquam consequat odio quis laoreet.</p>
        </div>
        </div></div>
                    <div className="row d-flex justify-content-center">
                    <div className="col-sm">
                    <NavLink to="/internships">
                        <Card  imgsrc={img4} title={"Internships"} desc={"Mental illnesses are more common than cancer, diabetes, or heart disease."} />
                        </NavLink>
                    </div>
                   
                  
                    <div className="col-sm">
                    <NavLink to="/webinars">
                        <Card  imgsrc={img5} title={"Webinars"} desc={"Good mental health can improve life quality whereas poor mental health can worsen it"} />
                  </NavLink>
                    </div>
                    
                    </div>
                </div> 
                
            </div>


        </>
    );
};

export default Home;
