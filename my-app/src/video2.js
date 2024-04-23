import React from 'react';

import classes from './BackgroundVideo.module.css';
import Banner from "./Banner";

const BackgroundVideo = () => {
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} poster={''} preload='auto'>
                <source src={require("./video.mp4")} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <Banner/>
                    <p>
                        Virtual Surgery Lab
                    </p>
                </div>
            </div>
        </div>
    )
};

export default BackgroundVideo