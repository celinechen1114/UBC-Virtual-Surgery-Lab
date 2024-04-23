import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import EmailIcon from '@material-ui/icons/Email';
import clsx from 'clsx';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    media: {
        height: 300,
    },
    content:{
        flexgrow: 1,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));
export default function MediaCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={require("./images/"+props.image+".jpg")}
                    title="Profile Photo"
                />
                <CardContent className={classes.content}>
                    <Typography variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                        {props.title}
                    </Typography>
                </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.descriptor}
                    </Typography>
                </CardContent>
            </Collapse>
            <CardActions>
                <IconButton color="primary" disabled={!props.github} href={props.github} component={Link} target="_blank" rel="noopener">
                    <GitHubIcon />
                </IconButton>
                <IconButton color="primary" disabled={!props.linkedin} href={props.linkedin} component={Link} target="_blank" rel="noopener">
                    <LinkedInIcon/>
                </IconButton>
                <IconButton disabled={!props.email} color="primary" href={'mailto:'+props.email} component={Link} target="_blank" rel="noopener">
                    <EmailIcon/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}