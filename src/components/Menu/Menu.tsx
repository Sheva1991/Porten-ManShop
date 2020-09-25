import CustomLink from 'components/CustomLink';
import React from 'react'
import { PropsType } from './types';
import classNames from 'classnames'
import styles from './Menu.module.scss'

const Menu: React.FC<PropsType> = ({ items, children, action, adaptiveOn }) => {

    return (
        <div className={classNames(styles.root, { [styles.adaptiveMenu]: adaptiveOn === true })}>
            {items.map(({ key, value }) => (
                <CustomLink key={key} className={styles.item} link={key} title={value} action={action} />
            ))}
            {children}
        </div>
    )
}

export default Menu