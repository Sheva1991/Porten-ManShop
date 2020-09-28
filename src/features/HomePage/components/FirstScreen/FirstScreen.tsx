import HtmlComponent from 'components/HtmlComponent'
import React from 'react'
import styles from './FirstScreen.module.scss'


const FirstScreen: React.FC = () => {

    return (
        <section className={styles.root}>
            <div className={styles.logo}>
                <HtmlComponent component='h1' variant='h1' title='PORTEN' />
                <p className={styles.subtitle}>санкт-петербург</p>
            </div>
            <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
            </p>
        </section>
    )
}

export default FirstScreen