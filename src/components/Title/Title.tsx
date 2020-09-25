import React from 'react'
import styles from './Title.module.scss'
import classNames from 'classnames'
import { PropsType } from './types';

const Title: React.FC<PropsType> = ({ title, tag, className, children }) => {
    const CustomTag = tag;

    return (
        <CustomTag className={classNames(styles.root, className,
            {
                [styles.h1]: tag === 'h1',
                [styles.h2]: tag === 'h2',
                [styles.h3]: tag === 'h3',
                [styles.h4]: tag === 'h4',

            })}>{title}{children}</CustomTag>
    )
}

export default Title
