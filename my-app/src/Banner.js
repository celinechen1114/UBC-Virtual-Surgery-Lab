import React, {Component} from 'react'
import anime from 'animejs';
import { Typography } from '@material-ui/core';

export default class Banner extends Component {
    animation() {
        anime({
			targets: '.ml3',
			opacity: [0,1],
			easing: "easeInOutQuad",
			duration: 2250,
        });
    }

    componentDidMount() {
        this.animation()
    }

    render() {
        return (
            <React.Fragment>
				<Typography className='ml3' variant='h3'>
                    UBC Head and Neck
				</Typography>
            </React.Fragment>
        )
    }
}