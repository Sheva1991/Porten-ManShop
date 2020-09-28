import React from 'react'
import { PropsType } from './types';
import Slider from "react-slick";
import './Slider.scss'

const CustomSlider: React.FC<PropsType> = ({ settings, children }) => {
    return (
        <>
            <Slider {...settings} >
                {children}
            </Slider>
        </>
    )
}

export default CustomSlider
