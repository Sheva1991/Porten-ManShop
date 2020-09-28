import Card from 'components/Card'
import CustomSlider from 'components/Slider/Slider'
import HtmlComponent from 'components/HtmlComponent'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Arrivals.module.scss'
import { PropsType } from './types';
import { settings } from './constatnts';



const Arrivals: React.FC<PropsType> = ({ items }) => {
    const [viewSlider, setviewSlider] = useState({
        matches: window.innerWidth > 768 ? false : true,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(max-width: 768px)");
        mediaQuery.addListener(setviewSlider);

        return () => mediaQuery.removeListener(setviewSlider);

    }, [])

    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <HtmlComponent component='h2' variant='h2' title='новые поступления' />
                {viewSlider && !viewSlider.matches ? <Row>
                    {items.map((item, index: number) => (
                        <Col xl={3} lg={4} md={6} key={index}>
                            <Card title={item.title} text={item.text} img={item.img} />
                        </Col>
                    ))}
                </Row>
                    :
                    <CustomSlider settings={settings}>
                        {items.map((item, index: number) => (
                            <div className={styles.slide} key={index}>
                                <Card title={item.title} text={item.text} img={item.img} />
                            </div>
                        ))}
                    </CustomSlider>}

            </Container>
        </section >
    )
}

export default Arrivals