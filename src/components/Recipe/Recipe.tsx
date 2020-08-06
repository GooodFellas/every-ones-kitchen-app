import React from 'react';
import RecipeImageSlider from "../RecipeImageSlider/RecipeImageSlider";
import {Breadcrumbs, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import {Link} from "react-router-dom";

const steps = [
    {
        primary: 'This is step1',
        secondary: 'Here are the sub steps'
    },
    {
        primary: 'This is step2',
    },
    {
        primary: 'Step 3',
        secondary: 'Substeps again'
    }
]

const Recipe = () => <div style={{marginTop: 100}}>
    <div style={{paddingLeft: 70, paddingRight: 70}}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
                Home
            </Link>
            <Link color="inherit" to="/search">
                Link to category
            </Link>
            <Typography color="textPrimary">Recipe</Typography>
        </Breadcrumbs>
        <RecipeImageSlider/>
        <div style={{marginTop: 20}}>
            <Typography variant="h5" style={{textAlign: "left"}}>
                Procedure:
            </Typography>
            <List>
                {steps.map((step: any) =>
                    <ListItem>
                        <ListItemIcon>
                            <StarIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={step.primary}
                            secondary={step.secondary ? step.secondary : null}
                        />
                    </ListItem>,
                )}
            </List>
        </div>
    </div>
</div>;

export default Recipe;
