import React from 'react'
import podcast from '../assets/podcast.jpeg';
import './campaigns.css'

const Webinars = () => {
    return (
        <>
        <div className="container full_page">
            <div className="row">
                <div className="col-sm information">
                <h1 className="page_heading">Webinars</h1>
                <p className="para_text">
                    even in today's developing society it can be very hard for people to feel like themselves and be happy and thats where we come in.  we at your friend help to break through the stigma against mental health awareness with the help of webinars and courses. 
your friend provides you with webinars, free as well as paid, held by professional psychologists and mental health speakers who will give you the guidance and confidence you need to work towards a mentally healthy life. we have successfully held 3 webinars in the past with renowned speakers such as:
1:  Free Webinar in collaboration with Dr. Samir Parikh, director of department of mental health and behavioural sciences of fortis healthcare. 
2: Paid webinar in collaboration with Neelam Mishra 
3: A series of  paid national level webinars with Divya Dureja as the speaker.

                    </p>
                      </div>
                <div className="col-sm right-img">
                <img className="image-class"  alt="John" src={podcast} height="250" weight="250"/>
                </div>
            </div>
            <div className="row give_space">
            <div className="col-sm left-img">
                <img className="image-class"  alt="John" src={podcast} height="250" weight="250"/>
                </div>
                <div className="col-sm information">
                <p className="para_text">
                    even in today's developing society it can be very hard for people to feel like themselves and be happy and thats where we come in.  we at your friend help to break through the stigma against mental health awareness with the help of webinars and courses. 
your friend provides you with webinars, free as well as paid, held by professional psychologists and mental health speakers who will give you the guidance and confidence you need to work towards a mentally healthy life. we have successfully held 3 webinars in the past with renowned speakers such as:
1:  Free Webinar in collaboration with Dr. Samir Parikh, director of department of mental health and behavioural sciences of fortis healthcare. 
2: Paid webinar in collaboration with Neelam Mishra 
3: A series of  paid national level webinars with Divya Dureja as the speaker.

                    </p>
                          </div>
            </div>
        </div>
        </>
    );
};

export default Webinars;
