import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

import './styles/layout.scss';

// ? images
import car1 from '../static/car1.png';
import car2 from '../static/car2.png';
import car3 from '../static/car3.png';


const SliderImage = () => {

    var items = [
        {

            
            image: car1
        },
        {

            
            image: car2
        },
        {

            
            image: car3
        }
    ]
    return (
        <Carousel className="slider-carousel" animation="fade" interval="4500">
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

const Item = ({ item: { description, image } }) => {
    return (
        <Paper className="slider_item">
            <img className="image_slider animate__animated animate__fadeIn" src={image} alt="" />

            

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper >
    )
}

export default SliderImage
