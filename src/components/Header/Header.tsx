import Link from 'components/Link'
import Menu from 'components/Menu'
import React, { useCallback, useState } from 'react'
import styles from './Header.module.scss'
import { ReactComponent as CartIcon } from 'assets/icons/cart.svg'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { menu } from './constants';
import { Container } from '@material-ui/core'



const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = useCallback(
        () => {
            setNavOpen(prevOpen => !prevOpen)
        }, [setNavOpen])

    return (
        <header className={styles.root}>
            <Container className={styles.container}>
                <Link link='/' className={styles.logo} title='PORTEN'></Link>
                {navOpen ? <button className={styles.toggler} onClick={toggleNav}><i className="fas fa-times"></i></button> :
                    <button className={styles.toggler} onClick={toggleNav}><i className="fas fa-bars"></i></button>}
                <Menu items={menu} onClick={toggleNav} adaptiveOn={navOpen}>
                    <Link link='/cart' onClick={toggleNav}>
                        <CartIcon className={styles.cart} />
                    </Link>
                    <Link link='/cart' onClick={toggleNav}>
                        <SearchIcon className={styles.search} />
                    </Link>

                </Menu>
            </Container>
        </header>
    )
}

export default Header