import CustomButton from 'components/CustomButton'
import Title from 'components/Title'
import React from 'react'
import classNames from 'classnames'
import styles from './NewColaction.module.scss'
import { PropsType } from './types';


const NewColaction: React.FC<PropsType> = ({ title, btnTitle, className, text }) => {

    return (
        <section className={classNames(styles.root, className)}>
            { title && <Title tag='h2' title={title} />}
            {text && <div className={styles.text}>{text}</div>}
            {btnTitle && <CustomButton className={styles.btn} title={btnTitle} />}
        </section>
    )
}

export default NewColaction