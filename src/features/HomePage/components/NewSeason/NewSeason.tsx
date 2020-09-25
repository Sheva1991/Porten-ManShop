import CustomCard from 'components/Card'
import Title from 'components/Title'
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './NewSeason.module.scss'
import CustomSlider from '../../../../components/CustomSlider/CustomSlider';


const img = require('assets/img/clock.png')
const items = [
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
    { img: img, title: 'Louis XVI ATHOS', text: '165 000 руб.' },
]

const NewSeason: React.FC = () => {
    const [viewSlider, setviewSlider] = useState(false)

    const handleResize = () => {
        let width = document.documentElement.clientWidth
        if (width <= 576) {
            setviewSlider(true)
        } else {
            setviewSlider(false)
        }
    }

    useEffect(() => {
        let width = window.innerWidth
        if (width <= 576) {
            setviewSlider(true)
        } else {
            setviewSlider(false)
        }
        window.addEventListener('resize', handleResize)

    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (
        <section className={styles.root}>
            <Title tag='h2' title='СЕЗОН 2020/21' />
            {!viewSlider ?
                <Row className='justify-content-center'>
                    {items.map((item, index: number) => (
                        <Col md={4} sm={8} key={index}>
                            <CustomCard small title={item.title} text={item.text} img={item.img} />
                        </Col>
                    ))}
                </Row>
                :
                <CustomSlider>
                    {items.map((item, index: number) => (
                        <div className={styles.slide} key={index}>
                            <CustomCard small title={item.title} text={item.text} img={item.img} />
                        </div>
                    ))}
                </CustomSlider>}
        </section>
    )
}

export default NewSeason