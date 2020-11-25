import React from 'react'
import podcast from '../assets/podcast.jpeg';
import './campaigns.css'

const Campaigns = () => {
    return (
        <>
        <div className="container full_page">
            <div className="row">
                <div className="col-sm information">
                <h1 className="page_heading">Campaigns</h1>
                <p className="para_text">
                    Even though the general perception of mental illness has improved over the past decades, studies show that stigma against mental illness is still powerful and that people tend to attach negative stigmas to mental health condition. Stigma and misinformation can feel like overwhelming obstacles for someone who is struggling with a mental health condition. 

Keeping this in mind we are dedicatedly working hard to find ways we can help people dealing with mental health related issues and hence we have started a Campaign :
 ‘All ears to you, Always’, where we are trying to spread awareness about mental health and overcome the stigmas attached to it by reaching out Different colleges across India and providing students with a safe place to vent out their feelings.  Simply said, it’s a place where one can bring in any issue that’s bothering them and talk about it with a trained team of representatives and mental health personnel.
So far we have completed our campaign in:
1.    ‘ASHUTOSH COLLEGE,KOLKATA’ on 3rd August with the help of 8 students who volunteered to be a part of this campaign.

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
                    Even though the general perception of mental illness has improved over the past decades, studies show that stigma against mental illness is still powerful and that people tend to attach negative stigmas to mental health condition. Stigma and misinformation can feel like overwhelming obstacles for someone who is struggling with a mental health condition. 

Keeping this in mind we are dedicatedly working hard to find ways we can help people dealing with mental health related issues and hence we have started a Campaign :
 ‘All ears to you, Always’, where we are trying to spread awareness about mental health and overcome the stigmas attached to it by reaching out Different colleges across India and providing students with a safe place to vent out their feelings.  Simply said, it’s a place where one can bring in any issue that’s bothering them and talk about it with a trained team of representatives and mental health personnel.
So far we have completed our campaign in:
1.    ‘ASHUTOSH COLLEGE,KOLKATA’ on 3rd August with the help of 8 students who volunteered to be a part of this campaign.

                    </p>
                            </div>
            </div>
        </div>
        </>
    );
};

export default Campaigns;
