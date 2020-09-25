import CustomLink from 'components/CustomLink'
import Menu from 'components/Menu'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from './Header.module.scss'

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
                        <svg className={styles.cart} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0035 6.81175C19.9192 6.6899 19.8066 6.59031 19.6754 6.5215C19.5441 6.45269 19.3982 6.41672 19.25 6.41667H6.72193L5.66409 3.8775C5.52539 3.54312 5.29052 3.25746 4.98927 3.05673C4.68801 2.856 4.33393 2.74925 3.97193 2.75H1.83334V4.58334H3.97193L8.32059 15.0196C8.39025 15.1866 8.50775 15.3292 8.65831 15.4295C8.80887 15.5298 8.98575 15.5834 9.16668 15.5833H16.5C16.8823 15.5833 17.2242 15.3459 17.3589 14.9893L20.1089 7.656C20.1609 7.51724 20.1785 7.36794 20.1601 7.22091C20.1417 7.07387 20.088 6.93348 20.0035 6.81175ZM15.8648 13.75H9.77809L7.48643 8.25H17.9273L15.8648 13.75Z" fill="white" />
                            <path d="M9.625 19.25C10.3844 19.25 11 18.6344 11 17.875C11 17.1156 10.3844 16.5 9.625 16.5C8.86561 16.5 8.25 17.1156 8.25 17.875C8.25 18.6344 8.86561 19.25 9.625 19.25Z" fill="white" />
                            <path d="M16.0417 19.25C16.801 19.25 17.4167 18.6344 17.4167 17.875C17.4167 17.1156 16.801 16.5 16.0417 16.5C15.2823 16.5 14.6667 17.1156 14.6667 17.875C14.6667 18.6344 15.2823 19.25 16.0417 19.25Z" fill="white" />
                        </svg>
                    </CustomLink>
                    <svg onClick={toggleNav} className={styles.search} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.25 15.4167L12.5255 10.6922C13.3989 9.36482 13.7487 7.76053 13.5072 6.18999C13.2657 4.61945 12.4501 3.19437 11.2182 2.19068C9.98634 1.18698 8.42587 0.67606 6.83892 0.756838C5.25197 0.837616 3.75144 1.50434 2.62785 2.62794C1.50425 3.75153 0.837524 5.25206 0.756746 6.83901C0.675968 8.42596 1.18689 9.98643 2.19058 11.2183C3.19428 12.4502 4.61936 13.2658 6.1899 13.5073C7.76044 13.7488 9.36473 13.399 10.6922 12.5256L15.4167 17.2501L17.25 15.4167ZM2.58332 7.16675C2.58332 4.6395 4.63941 2.58341 7.16666 2.58341C9.69391 2.58341 11.75 4.6395 11.75 7.16675C11.75 9.694 9.69391 11.7501 7.16666 11.7501C4.63941 11.7501 2.58332 9.694 2.58332 7.16675Z" fill="white" />
                    </svg>
                </Menu>
            </Container>
        </header>
    )
}

export default Header