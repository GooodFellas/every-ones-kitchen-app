import Carousel from "react-material-ui-carousel";
import React from "react";
import FeaturedBanner from "../FeaturedBanner/FeaturedBanner";

import './FeaturedSlider.css'

const items = [
    {
        Name: "Breakfasts",
        Caption: "The most important meal of the day",
        contentPosition: "left",
        id: 'breakfasts',
        Items: [
            {
                Name: "Bagel",
                Image: "https://source.unsplash.com/featured/?bagel",
                id: 'bagel'
            },
            {
                Name: "Donut",
                Image: "https://source.unsplash.com/featured/?donut",
                id: 'donut'
            }
        ]
    },
    {
        Name: "Entrees",
        Caption: "You can't have enough",
        contentPosition: "middle",
        id: 'entrees',
        Items: [
            {
                Name: "Omlette",
                Image: "https://source.unsplash.com/featured/?omlette",
                id: 'omlette'
            },
            {
                Name: "Wings",
                Image: "https://source.unsplash.com/featured/?chicken,wings",
                id: 'wings'
            }
        ]
    },
    {
        Name: "Snacks",
        Caption: "Get you going",
        contentPosition: "right",
        id: 'snacks',
        Items: [
            {
                Name: "Cookies",
                Image: "https://source.unsplash.com/featured/?cookies",
                id: 'cookies'
            },
            {
                Name: "Ice Cream",
                Image: "https://source.unsplash.com/featured/?icecream",
                id: 'icecream'
            }
        ]
    }
]


const FeaturedSlider = () =>
    <div>
        <Carousel
            className="slider"
            autoPlay={true}
            animation={"slide"}
            indicators={true}
            timeout={500}
            navButtonsAlwaysVisible={false}
            activeIndicatorProps={{className: '', style: {}}}
            indicatorProps={{className: '', style: {}}}
        >
            {
                items.map((item, index) => {
                    return <FeaturedBanner item={item} key={index} contentPosition={item.contentPosition}/>
                })
            }
        </Carousel>
    </div>

export default FeaturedSlider;