import Card from 'components/Card'
import Title from 'components/HtmlComponent'
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from './NewSeason.module.scss'
import CustomSlider from 'components/Slider/Slider';
import { items, settings } from './constants';

const NewSeason: React.FC = () => {
    const [viewSlider, setviewSlider] = useState({
        matches: window.innerWidth > 576 ? false : true,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 576px)");
        mediaQuery.addListener(setviewSlider);

        return () => mediaQuery.removeListener(setviewSlider);

    }, [])


    return (
        <section className={styles.root}>
            <Title component='h2' variant='h2' title='СЕЗОН 2020/21' />
            {viewSlider && !viewSlider.matches ?
                <Row className='justify-content-center'>
                    {items && items.map((item, index: number) => (
                        <Col md={4} sm={8} key={index}>
                            <Card small title={item.title} text={item.text} img={item.img} />
                        </Col>
                    ))}
                </Row>
                :
                <CustomSlider settings={settings}>
                    {items && items.map((item, index: number) => (
                        <div className={styles.slide} key={index}>
                            <Card small title={item.title} text={item.text} img={item.img} />
                        </div>
                    ))}
                </CustomSlider>}
        </section>
    )
}

export default NewSeason