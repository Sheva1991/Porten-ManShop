import CustomLink from 'components/CustomLink'
import Menu from 'components/Menu'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './Header.module.scss'
import { ReactComponent as CartIcon } from 'assets/img/cart.svg'
import { ReactComponent as SearchIcon } from 'assets/img/search.svg'

const menu = [{
    key: '/likes',
    value: 'понравилось'
},
{
    key: '/cabinet',
    value: 'Личный кабинет'
},
{
    key: '/settings',
    value: 'настройки'
},
]

const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
        setNavOpen(!navOpen)
    }
    return (
        <header className={styles.root}>
            <Container className={styles.container}>
                <CustomLink link='/' className={styles.logo} title='PORTEN'></CustomLink>
                {navOpen ? <button className={styles.toggler} onClick={() => { setNavOpen(!navOpen) }}><i className="fas fa-times"></i></button> :
                    <button className={styles.toggler} onClick={() => { setNavOpen(!navOpen) }}><i className="fas fa-bars"></i></button>}
                <Menu items={menu} action={toggleNav} adaptiveOn={navOpen}>
                    <CustomLink link='/cart' action={toggleNav}>
                        <CartIcon className={styles.cart} />
                    </CustomLink>
                    <SearchIcon className={styles.search} onClick={toggleNav} />
                </Menu>
            </Container>
        </header>
    )
}

export default Header