import React from 'react'
import FirstScreen from './components/FirstScreen'
import styles from './HomePage.module.scss'
import { Col, Row } from 'react-bootstrap';
import NewSeason from './components/NewSeason';
import NewColaction from './components/NewColaction';
import Arrivals from './components/Arrivals';
import Brands from './components/Brands';

const img = require('assets/img/clock.png')
const items = [
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
]


const HomePage: React.FC = () => {

    return (
        <>
            <FirstScreen />
            <Row className='m-0'>
                <Col lg={12} xl={7} className='p-0'>
                    <NewSeason />
                </Col>
                <Col lg={12} xl={5} className='p-0'>
                    <NewColaction title='Новая коллекция' btnTitle='Каталог' />
                </Col>
            </Row>
            <Row className='m-0'>
                <Col lg={12} xl={5} className='p-0 order-2 order-xl-1'>
                    <NewColaction className={styles.bg} />
                </Col>
                <Col lg={12} xl={7} className='p-0 order-1 order-xl-2'>
                    <NewColaction className={styles.nobg} title='коллекция 2018' btnTitle='посмотреть коллекцию'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. ' />
                </Col>
            </Row>
            <Arrivals items={items} />
            <Brands />
        </>
    )
}

export default HomePage