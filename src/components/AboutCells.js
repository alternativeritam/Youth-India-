import React from 'react'
import podcast from '../assets/podcast.jpeg';
import './campaigns.css'

const AboutCells = () => {
    return (
        <>
        <div className="container full_page">
            <div className="row">
                <div className="col-sm information">
                <h1 className="page_heading">About Cells</h1>
                <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue porttitor finibus. Nunc justo nunc, porta bibendum urna id, rhoncus facilisis turpis. Vivamus ex enim, luctus id scelerisque vel, tempus quis arcu. Suspendisse mauris justo, convallis bibendum ipsum in, volutpat facilisis nibh. Morbi arcu elit, sagittis id feugiat vitae, tempus quis tellus. Mauris porta sit amet eros non malesuada. Vivamus commodo leo a ante pellentesque, in ornare felis mollis. Nam eu commodo nibh. Nullam id massa nibh.</p>
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
                <p className="para_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue porttitor finibus. Nunc justo nunc, porta bibendum urna id, rhoncus facilisis turpis. Vivamus ex enim, luctus id scelerisque vel, tempus quis arcu. Suspendisse mauris justo, convallis bibendum ipsum in, volutpat facilisis nibh. Morbi arcu elit, sagittis id feugiat vitae, tempus quis tellus. Mauris porta sit amet eros non malesuada. Vivamus commodo leo a ante pellentesque, in ornare felis mollis. Nam eu commodo nibh. Nullam id massa nibh.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutCells;
