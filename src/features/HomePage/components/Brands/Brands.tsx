import { Container, Grid } from '@material-ui/core'
import HtmlComponent from 'components/HtmlComponent'
import React from 'react'
import styles from './Brands.module.scss'

const brand = require('assets/img/brand.png')

const Brands = () => {
    return (
        <section className={styles.root}>
            <Container className={styles.container}>
                <HtmlComponent component='h2' variant='h2' title='наши бренды' />
                <Grid container className={styles.brands}>
                    <Grid item lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Grid>
                    <Grid item lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Grid>
                    <Grid item lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Grid>
                    <Grid item lg={3} md={6} className={styles.brand}>
                        <img src={brand} alt="brand" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Brands
