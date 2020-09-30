import Card from 'components/Card'
import Title from 'components/HtmlComponent'
import React, { useState, useEffect } from 'react'
import styles from './NewSeason.module.scss'
import CustomSlider from 'components/Slider/Slider';
import { items, settings } from './constants';
import { Grid } from '@material-ui/core'

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
                <Grid container className='justify-content-center'>
                    {items && items.map((item, index: number) => (
                        <Grid item md={4} sm={8} key={index}>
                            <Card small title={item.title} text={item.text} img={item.img} />
                        </Grid>
                    ))}
                </Grid>
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