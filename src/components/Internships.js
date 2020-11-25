import React from 'react'
import podcast from '../assets/podcast.jpeg';
import './campaigns.css'

const Internships = () => {
    return (
        <>
        <div className="container full_page">
            <div className="row">
                <div className="col-sm information">
                <h1 className="page_heading">Internships</h1>
                <p className="para_text">
                    India has been gripped in fear due to the COVID virus outbreak. People have had time to reflect on themselves. But it has been found that many have had psychotic breakdowns and have needed help from professionals to get their minds back to their normal lives. So the help of psychologists has never been needed more than now. Your Friend provides help with RCI licensed clinical psychologists with immense experience and in-depth knowledge of mental health issues. Your Friend requires interns who can learn and work under their supervision. This is an opportunity like no other for college students and graduates to get hands-on experience by getting a chance to work under professionals directly helping them in their career development.
Your Friend does not only provide a platform for Psychology students only, but we also respect diversity and are providing opportunities to students in different fields. Students who want their first steps in the industry and also care for people can join Your Friends as interns. We provide not only internship under psychiatrists but also with Human Resource, Content Writing, Graphic Designing and much more. Be a part of Your Friends and develop your professional skills.

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
                   India has been gripped in fear due to the COVID virus outbreak. People have had time to reflect on themselves. But it has been found that many have had psychotic breakdowns and have needed help from professionals to get their minds back to their normal lives. So the help of psychologists has never been needed more than now. Your Friend provides help with RCI licensed clinical psychologists with immense experience and in-depth knowledge of mental health issues. Your Friend requires interns who can learn and work under their supervision. This is an opportunity like no other for college students and graduates to get hands-on experience by getting a chance to work under professionals directly helping them in their career development.
Your Friend does not only provide a platform for Psychology students only, but we also respect diversity and are providing opportunities to students in different fields. Students who want their first steps in the industry and also care for people can join Your Friends as interns. We provide not only internship under psychiatrists but also with Human Resource, Content Writing, Graphic Designing and much more. Be a part of Your Friends and develop your professional skills.

                    </p>
                          </div>
            </div>
        </div>
        </>
    );
};

export default Internships;
