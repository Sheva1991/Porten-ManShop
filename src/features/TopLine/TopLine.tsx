import CustomLink from 'components/CustomLink'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './TopLine.module.scss'
import { ReactComponent as PhoneIcon } from 'assets/img/phone.svg'
import { ReactComponent as LoginIcon } from 'assets/img/login.svg'

const TopLine: React.FC = () => {

    return (
        <Container className={styles.root}>
            <div className={styles.contacts}>
                <a href="tel:+8 (812) 123-45-67">
                    <PhoneIcon />
                    <span>8 (812) 123-45-67</span>
                </a>
                <span>Работаем 7 дней в неделю</span>
                <span>9:00 — 18:00</span>
            </div>
            <CustomLink link='/login' className={styles.login}>
                <LoginIcon />
                <span>Войти / Регистрация</span>
            </CustomLink>
        </Container>
    )
}

export default TopLine