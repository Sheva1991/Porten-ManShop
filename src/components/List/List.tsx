import React from 'react'
import { PropTypes } from './types';
import classNames from 'classnames'
import styles from './List.module.scss'

const List: React.FC<PropTypes> = ({ items, className }) => {
    return (
        <ul className={classNames(styles.root, className)}>
            {items.map((item, index: number) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default List
