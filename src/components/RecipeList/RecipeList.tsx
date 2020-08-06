import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {Link, useHistory} from "react-router-dom";
import {Breadcrumbs, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

const tileData = [
    {
        img: 'https://source.unsplash.com/featured/?pudding',
        title: 'Pudding',
        id: 'pudding',
        author: 'Rayudu',
        cols: 2,
        featured: true,
    },
    {
        img: 'https://source.unsplash.com/featured/?burger',
        title: 'Burger',
        id: 'burger',
        author: 'Barath',
    },
    {
        img: 'https://source.unsplash.com/featured/?cake',
        title: 'Cake',
        id: 'cake',
        author: 'Harish',
    },
    {
        img: 'https://source.unsplash.com/featured/?salad',
        title: 'Salad',
        id: 'salad',
        author: 'Sheetal',
        featured: true,
    },
    {
        img: 'https://source.unsplash.com/featured/?potato,chips',
        title: 'Chips',
        id: 'chips',
        author: 'Vasudha',
    },
    {
        img: 'https://source.unsplash.com/featured/?honey',
        title: 'Honey',
        id: 'Honey',
        author: 'Priya',
    },
    {
        img: 'https://source.unsplash.com/featured/?chana,Masala',
        title: 'Chana Masala',
        id: 'chanaMasala',
        author: 'Krishna',
        cols: 2,
    },
    {
        img: 'https://source.unsplash.com/featured/?lamb,Chops',
        title: 'Lamb Chops',
        id: 'lambChops',
        author: 'Meghu',
    },
    {
        img: 'https://source.unsplash.com/featured/?mushroom,Curry',
        title: 'Mushroom Curry',
        id: 'mushroomCurry',
        author: 'Mahesh',
    },
    {
        img: 'https://source.unsplash.com/featured/?chicken,Wings',
        title: 'Chicken Wings',
        id: 'chickenWings',
        author: 'Prabhu',
    },
    {
        img: 'https://source.unsplash.com/featured/?shrimp,Fry',
        title: 'Shrimp Fry',
        id: 'shrimpFry',
        cols: 2,
        author: 'Manoj',
    },
    {
        img: 'https://source.unsplash.com/featured/?biryani',
        title: 'Biryani',
        id: 'biryani',
        author: 'Valli',
    },
];

const RecipeList = () => {
    const classes = useStyles();
    let history = useHistory();
    const recipeOnClick = (id: any) => {
        history.push("/recipe/" + id)
    }

    return (
        <div className={classes.root} style={{margin: 50}}>
            <GridList cellHeight={180} cols={3}>
                <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            Home
                        </Link>
                        <Typography color="textPrimary">Search or Category</Typography>
                    </Breadcrumbs>
                </GridListTile>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} onClick={() => {
                        recipeOnClick(tile.id)
                    }} style={{cursor: "pointer"}}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default RecipeList;