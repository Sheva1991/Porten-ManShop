import React from 'react'
import styles from './Footer.module.scss'
import HtmlComponent from 'components/HtmlComponent';
import SubscribeForm from 'components/Forms/SubscribeForm';
import List from 'components/List/List';
import { Container, Grid } from '@material-ui/core';

const Footer: React.FC = () => {

    return (
        <footer className={styles.root}>
            <Container>
                <Grid container spacing={3} className={styles.row}>
                    <Grid item className={styles.col} md={4} xs={12}>
                        <HtmlComponent title='О магазине' component='h3' variant='h3' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                        </div>
                    </Grid>
                    <Grid item className={styles.col} md={4} xs={12}>
                        <HtmlComponent title='Категории' component='h3' variant='h3' />
                        <List className={styles.list} items={['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки',]} />
                    </Grid>
                    <Grid item className={styles.col} md={4} xs={12}>
                        <HtmlComponent title='РАссылка' component='h3' variant='h3' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                        </div>
                        <SubscribeForm />
                    </Grid>
                </Grid>

            </Container></footer>
    )
}

export default Footer