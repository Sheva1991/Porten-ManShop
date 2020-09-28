import HtmlComponent from 'components/HtmlComponent'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Brands.module.scss'

const brand = require('assets/img/brand.png')

const Brands = () => {
    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <HtmlComponent component='h2' variant='h2' title='наши бренды' />
                <Row className={styles.brands}>
                    <Col lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Col>
                    <Col lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Col>
                    <Col lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Col>
                    <Col lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Brands
