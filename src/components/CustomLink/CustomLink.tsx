import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './CustomLink.module.scss'
import { PropsType } from './types';
import classNames from 'classnames'

const CustomLink: React.FC<PropsType> = ({ component, link, title, className, action, children }) => {
    return (
        <NavLink to={link} component={component} onClick={action} className={classNames(styles.root, className)} >
            {children} {title}
        </NavLink >
    )
}

export default CustomLink
