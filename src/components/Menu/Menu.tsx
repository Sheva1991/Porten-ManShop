import Link from 'components/Link';
import React from 'react'
import { PropsType } from './types';
import classNames from 'classnames'
import styles from './Menu.module.scss'

const Menu: React.FC<PropsType> = ({ items, children, onClick, adaptiveOn }) => {

    return (
        <div className={classNames(styles.root, { [styles.adaptiveMenu]: adaptiveOn === true })}>
            {items.map(({ key, value }) => (
                <Link key={key} className={styles.item} link={key} title={value} onClick={onClick} />
            ))}
            {children}
        </div>
    )
}

export default Menu