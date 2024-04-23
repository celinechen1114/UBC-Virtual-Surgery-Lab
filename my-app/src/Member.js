import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MediaCard from "./ProfileCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        // marginBottom: "5vmin",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Member() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container className={classes.root} spacing={2} justify={"center"} style={{paddingBottom: '30px'}}>
                <Grid item>
                    <MediaCard name={"Eitan Prisman"} title={"Primary Investigator"} image={"prisman"} email={'eitan.prisman@gmail.com'} linkedin={'https://ca.linkedin.com/in/eitan-prisman-34764755'} descriptor={""} />
                </Grid>
                <Grid item>
                    <MediaCard name={"Anat Dinur"} title={"Clinical Fellow"} image={"unnamed"} descriptor={"Anat is a Clinical Fellow currently working with Dr. Prisman."}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Matthew Mong"} title={"Research and Development Co-op"} image={"matthew"} github={'https://github.com/MatthewMong'} linkedin={'https://linkedin.com/in/matthewmong'} email={'matthew.mong1999@gmail.com'} descriptor={"Currently working to improve reliability and implement features, Matthew's main focus is to develop software as well as lead the custom plate project."}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Linh Tran"} title={"Research Assistant"} image={"linh"} linkedin={'https://ca.linkedin.com/in/khanh-linh-tran-4115a9141'}github={'https://github.com/klinhtran'} email={'ltran17@student.ubc.ca'} descriptor={""}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Kelly Nguyen"} title={"Research Coordinator"} image={"kelly"} email={'kelly.nguyen@alumni.ubc.ca'} linkedin={'https://www.linkedin.com/in/kelly-nguyen-546381147'}descriptor={""}/>
                </Grid>
                <Grid item>
                    <MediaCard name={"Edward Wang"} title={"Researcher"} image={"Edward"} github={'https://github.com/edwardwang1'} linkedin={'https://ca.linkedin.com/in/edward-wang1'} email={'ed1996@gmail.com'} descriptor={"Edward is currently working towards an MD PhD as well as working on multiple projects."}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
