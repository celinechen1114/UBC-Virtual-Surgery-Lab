import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function TabsWrappedLabel() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2} justify={"center"} style={{paddingBottom: '30px', alignItems: 'stretch'}}>
                <Grid item>
                    <ProjectCard title={'Patient Specific Reconstruction Plates'} date={'November 20, 2020'} image={'CustomPlate'} status={'Prototyping'} text={'Utilizing titanium 3D printing and our surgical planning software, we are developing software to create patient specific reconstruction plates to increase accuracy and reliability.'}/>
                </Grid>
                <Grid item>
                    <ProjectCard title={'Virtual Reality Surgery Planning'} date={'January 3, 2021'} image={'vr'} status={'Prototyping'} text={'In partnership with Imaging Reality we are working to develop a clinically relevant virtual reality application that allows surgeons to preplan surgical reconstructions in virtual space resulting in faster recovery times and more accurate reconstructions. Image credit: Imaging Reality'}/>
                </Grid>
                <Grid item>
                    <ProjectCard title={'Preplanned Surgical Reconstruction'} date={'January 3, 2017'} image={'Capture'} status={'Production'} text={'Using 3D printing and computerized tomography scans we have developed software to preplan surgical reconstructions, allowing surgeons to visualize and optimize for patient outcome. This project is currently being tested at Vancouver General Hospital'}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}