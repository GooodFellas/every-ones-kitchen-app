import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom";


const FeaturedBanner = (props: any) => {
    let history = useHistory();

    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    const categoryOnClick = () => {
        history.push("/search?categoryId=" + props.item.id)
    }

    let items = [];
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Title">
                    {props.item.Name}
                </Typography>

                <Typography className="Caption">
                    {props.item.Caption}
                </Typography>

                <Button variant="outlined" className="ViewButton" onClick={categoryOnClick}>
                    View All
                </Button>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];
        const recipeOnClick = () => {
            history.push("/recipe/" + item.id)
        }
        const media = (
            <Grid item xs={4} key={item.Name} onClick={recipeOnClick}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                >
                    <Typography className="MediaCaption">
                        {item.Name}
                    </Typography>
                </CardMedia>

            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
};

export default FeaturedBanner;