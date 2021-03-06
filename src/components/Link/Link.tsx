import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Link.module.scss'
import { PropsType } from './types';
import classNames from 'classnames'

const Link: React.FC<PropsType> = ({ component, link, title, className, onClick, children }) => {
    return (
        <NavLink to={link} component={component} onClick={onClick} className={classNames(styles.root, className)} >
            {children} {title}
        </NavLink >
    )
}

export default Link
