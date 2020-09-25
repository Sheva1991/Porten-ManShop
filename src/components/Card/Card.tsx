import React from 'react'
import { PropsType } from './types';
import styles from './Card.module.scss'
import Title from 'components/Title';
import classNames from 'classnames'

const CustomCard: React.FC<PropsType> = ({ img, title, text, small }) => {
    return (
        <div className={styles.root}>
            <div className={classNames(styles.img, { [styles.sm]: small })}>
                <img src={img} alt={`img-${title}`} />
            </div>
            <div className={styles.body}>
                <Title tag='h4' className={styles.title}>{title}</Title>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default CustomCard
