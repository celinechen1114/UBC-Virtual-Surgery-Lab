import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';

export default function About() {
    return(
        <React.Fragment>
        <Grid container spacing={3} style={{backgroundColor: "lightgrey"}} justify="space-around" alignItems="center">
        <Grid item xs={12} sm={6}>
        <Typography align='center'>
                Location: <br/>
                Gordon & Leslie Diamond Health Care Centre<br/>
                4th Floor- 2775 Laurel Street<br/>
                Vancouver, BC,  V5Z 1M9<br/><br/>
                Email:<br/>
                <Link href='mailto:drprismanresearch@gmail.com'>General Inquiries</Link>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} align='center'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.8172809808543!2d-123.12809698413272!3d49.260909080233894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c2236eed27%3A0x6019349f49cc2a13!2sGordon%20and%20Leslie%20Diamond%20Health%20Care%20Centre!5e0!3m2!1sen!2sca!4v1609972915100!5m2!1sen!2sca" width="400" height="300" frameborder="0" title='google maps' style={{border:0}} allowfullscreen="" tabindex="0"></iframe>
        </Grid>
      </Grid>
        </React.Fragment>
    )
}