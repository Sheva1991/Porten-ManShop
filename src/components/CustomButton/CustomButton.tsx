import React from 'react'
import { PropsType } from './types';
import classNames from 'classnames'
import styles from './CustomButton.module.scss'

const CustomButton: React.FC<PropsType> = ({ type, title, onClick, className, disabled }) => {
    return (
        <button type={type} onClick={onClick} className={classNames(styles.root, className)} disabled={disabled}  >
            {title}
        </button>
    )
}

export default CustomButton
