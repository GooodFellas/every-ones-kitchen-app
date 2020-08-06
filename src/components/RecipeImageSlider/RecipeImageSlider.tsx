import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Grid} from "@material-ui/core";
import "./RecipeImageSlider.css"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true
};

const items = [
    {
        Name: "Ice Cream",
        Image: "https://source.unsplash.com/featured/?ice,cream"
    },
    {
        Name: "Cake",
        Image: "https://source.unsplash.com/featured/?cake"
    }
]
const RecipeImageSlider = () => {
    return <div>
        <Slider {...settings}>
            {
                items.map((item: any) =>
                    <Grid justify={'center'} alignItems={'center'} xs={12} sm={12} md={4}>
                        <div style={{maxHeight: 300}}>
                            <img style={{width: '100%', height: '100%', objectFit: 'contain'}} className={'slick-image'}
                                 src={item.Image}
                                 alt={item.Name}/>
                        </div>
                    </Grid>
                )
            }
        </Slider>
    </div>;
}

export default RecipeImageSlider;