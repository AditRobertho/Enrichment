import React from "react";
import ImageSlider from "../../components/carousel/image-slider.component";
import { SliderData } from "../../components/carousel/slider-data";

import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";


const HomePage = () => (
    <div className="hoempage">
        <ImageSlider slides={SliderData} />
        <Directory />
    </div>
)

export default HomePage;