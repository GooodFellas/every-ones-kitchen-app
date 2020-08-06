import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const images = [
    {
        url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
        title: 'Pizzas',
        id: 'pizza',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&w=400&q=80',
        title: 'Sandwiches',
        id: 'sandwich',
        width: '20%',
    },
    {
        url: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?auto=format&fit=crop&w=400&q=80',
        title: 'Smoothies',
        id: 'smoothie',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?auto=format&fit=crop&w=400&q=80',
        title: 'Cookies',
        id: 'cookie',
        width: '38%',
    },
    {
        url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=400&q=80',
        title: 'Curries',
        id: 'curry',
        width: '38%',
    },
    {
        url: 'https://images.unsplash.com/photo-1573333515743-56d57731dd1f?auto=format&fit=crop&w=400&q=80',
        title: 'Breads',
        id: 'bread',
        width: '24%',
    },
    {
        url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=400&q=80',
        title: "Biryanis",
        id: 'biryani',
        width: '40%',
    },
    {
        url: 'https://images.unsplash.com/photo-1565017329100-9b2682778b9d?auto=format&fit=crop&w=400&q=80',
        title: 'Pastas',
        id: 'pasta',
        width: '20%',
    },
    {
        url: 'https://images.unsplash.com/photo-1570781148825-b9c37b9531e7?auto=format&fit=crop&w=400&q=80',
        title: 'Cakes',
        id: 'cake',
        width: '40%',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(4),
    },
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        }, '&:hover': {
            zIndex: 1,
        }, '&:hover $imageBackdrop': {
            opacity: 0.15,
        }, '&:hover $imageMarked': {
            opacity: 0,
        }, '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const ProductCategories = () => {
    const classes = useStyles();
    let history = useHistory();

    const categoryOnClick = (id: any) => {
        history.push("/search?categoryId=" + id)
    }

    return (
        <Container className={classes.root} component="section">
            <Typography variant="h4" align="center" component="h2">
                For all tastes and all desires
            </Typography>
            <div className={classes.images}>
                {images.map((image) => (
                    <ButtonBase
                        key={image.title}
                        className={classes.imageWrapper}
                        style={{
                            width: image.width,
                        }}
                    >
                        <div
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <div className={classes.imageBackdrop}/>
                        <div className={classes.imageButton}>
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className={classes.imageTitle}
                                onClick={() => {
                                    categoryOnClick(image.id)
                                }}
                            >
                                {image.title}
                                <div className={classes.imageMarked}/>
                            </Typography>
                        </div>
                    </ButtonBase>
                ))}
            </div>
        </Container>
    );
};

export default ProductCategories;