import CustomCard from 'components/Card'
import CustomSlider from 'components/CustomSlider/CustomSlider'
import Title from 'components/Title'
import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Arrivals.module.scss'
import { PropsType } from './types';



const Arrivals: React.FC<PropsType> = ({ items }) => {
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
            <Container className={styles.container}>
                <Title tag='h2' title='новые поступления' />
                {!viewSlider ? <Row>
                    {items.map((item, index: number) => (
                        <Col xl={3} lg={4} md={6} key={index}>
                            <CustomCard title={item.title} text={item.text} img={item.img} />
                        </Col>
                    ))}
                </Row>
                    :
                    <CustomSlider>
                        {items.map((item, index: number) => (
                            <div className={styles.slide} key={index}>
                                <CustomCard title={item.title} text={item.text} img={item.img} />
                            </div>
                        ))}
                    </CustomSlider>}

            </Container>
        </section>
    )
}

export default Arrivals