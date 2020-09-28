import React from 'react'
import { PropsType } from './types';
import styles from './Card.module.scss'
import HtmlComponent from 'components/HtmlComponent';
import classNames from 'classnames'

const Card: React.FC<PropsType> = ({ img, title, text, small }) => {
    return (
        <div className={styles.root}>
            <div className={classNames(styles.img, { [styles.sm]: small })}>
                <img src={img} alt={`img-${title}`} />
            </div>
            <div className={styles.body}>
                <HtmlComponent component='h4' variant='h4' className={styles.title}>{title}</HtmlComponent>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Card
