import React from 'react'
import FirstScreen from './components/FirstScreen'
import styles from './HomePage.module.scss'
import NewSeason from './components/NewSeason';
import NewColaction from './components/NewColaction';
import Arrivals from './components/Arrivals';
import Brands from './components/Brands';
import { items } from './constants';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';


const HomePage: React.FC = () => {

    return (
        <>
            <FirstScreen />
            <Grid container>
                <Grid item lg={7} xs={12}>
                    <NewSeason />
                </Grid>
                <Grid item lg={5} xs={12} >
                    <NewColaction title='Новая коллекция' btnTitle='Каталог' />
                </Grid>
            </Grid>
            <Grid container>
                <Box clone order={{ xs: 2, lg: 1 }}>
                    <Grid item lg={5} xs={12}>
                        <NewColaction className={styles.bg} />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, lg: 2 }}>
                    <Grid item lg={7} xs={12} >
                        <NewColaction className={styles.nobg} title='коллекция 2018' btnTitle='посмотреть коллекцию'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. ' />

                    </Grid>
                </Box>
            </Grid>
            <Arrivals items={items} />
            <Brands />
        </>
    )
}

export default HomePage