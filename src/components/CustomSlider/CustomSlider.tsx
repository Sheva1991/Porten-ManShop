import React from 'react'
import { PropsType } from './types';
import Slider from "react-slick";

const CustomSlider: React.FC<PropsType> = ({ slidesToShow = 1, slidesToScroll = 1, children }) => {
    return (
        <>
            <Slider
                dots={false}
                arrows={false}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                autoplay={true}
                autoplaySpeed={4000}
            >
                {children}
            </Slider>
        </>
    )
}

export default CustomSlider

// export default class CustomSlider<PropsType> extends React.Component {

//     render() {
//         var settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <Slider {...settings} >
//                 {this.props.children}
//             </Slider>
//         );
//     }
// }
