import {Container, Grid, Link, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

const currentYear = new Date().getFullYear();


const Copyright = () => (
    <div style={{color: '#fefefe'}}>
        {'© '}
        {currentYear + ' '}
        <Link color="inherit" href="http://rayuduramisetti.com/">
            Good Fellas.
        </Link>{' All Rights Reserved'}
    </div>
);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#2f2e2e',
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: 'flex',
    },
    iconsWrapper: {
        height: 120,
    },
    icons: {
        display: 'flex',
        align: 'center'
    },
    icon: {
        color: '#fefefe',
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(1),
        '&:hover': {
            color: 'blue'
        },
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={5}
                      style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
                    <Grid item xs={12} className={classes.icons}>
                        <a target={'_blank'} href="http://rayuduramisetti.com/" className={classes.icon}>
                            <FacebookIcon/>
                        </a>
                        <a target={'_blank'} href="http://rayuduramisetti.com/" className={classes.icon}>
                            <TwitterIcon/>
                        </a>
                        <a target={'_blank'} href="http://rayuduramisetti.com/" className={classes.icon}>
                            <InstagramIcon/>
                        </a>
                        <a target={'_blank'} href="http://rayuduramisetti.com/" className={classes.icon}>
                            <YouTubeIcon/>
                        </a>
                    </Grid>
                    <Copyright/>
                </Grid>
            </Container>
        </Typography>
    );
}

export default Footer;