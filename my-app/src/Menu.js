import React, {useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import BackgroundVideo from "./video2";
import TabsWrappedLabel from "./CurrentProjects";
import Member from "./Member";
import PublicationsWrapper from "./PublicationsWrapper";
import About from "./About";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

function GrowButton(props) {
    // const executeScroll = () => props.someref.current.scrollIntoView({behavior: 'smooth'});
    const executeScroll= () => window.scrollTo({top: props.someref.current.offsetTop-80, behavior: 'smooth'});
    return (
        <Button onClick={executeScroll}>
            <Typography variant='button' style={{color: "white"}}>
                {props.title}
            </Typography>
        </Button>
    )
}

export default function ButtonAppBar() {
    const classes = useStyles();
    const PublicationsRef= useRef(null);
    const MembersRef= useRef(null);
    const ProjectsRef = useRef(null);
    const AboutRef = useRef(null);

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Fade in={true} timeout={4000}>
                    <AppBar position="fixed" style={{alignItems: "center", overflow: 'auto'}}>
                        <Toolbar>
                            <GrowButton title={"Projects"} someref={ProjectsRef}/>
                            <GrowButton title={"Members"} someref={MembersRef}/>
                            <GrowButton title={"Publications"} someref={PublicationsRef}/>
                            <GrowButton title={"About"} someref={AboutRef}/>
                        </Toolbar>
                    </AppBar>
                </Fade>
            </div>
            <BackgroundVideo/>
            <Typography ref={ProjectsRef} align='center' variant='h2' gutterBottom={true}>
                Projects
            </Typography>
            <TabsWrappedLabel/>
            <Typography ref={MembersRef} align='center' variant='h2' gutterBottom={true}>
                Members
            </Typography>
            <Member/>
            <Typography ref={PublicationsRef} align='center' variant='h2' gutterBottom={true}>
                Publications
            </Typography>
            <PublicationsWrapper/>
            <Typography ref={AboutRef} align='center' variant='h2' gutterBottom={true}>
                About
            </Typography>
            <About/>
        </React.Fragment>
    );
}