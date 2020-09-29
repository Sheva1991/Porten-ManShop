import ChangePasswordForm from 'components/Forms/ChangePasswordForm/LoginForm'
import HtmlComponent from 'components/HtmlComponent'
import React from 'react'
import styles from './KabinetPage.module.scss'

const KabinetPage = () => {
    return (
        <div className={styles.root}>
            <HtmlComponent className={styles.title} variant='h4' component='h4' title='Сменить пароль' />
            <ChangePasswordForm password='1234' />
        </div>
    )
}

export default KabinetPage
