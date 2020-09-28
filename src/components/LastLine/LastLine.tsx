import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './LastLine.module.scss'

const LastLine: React.FC = () => {

    return (
        <Container className={styles.root}>
            <span className={styles.copyright}>
                © 2020 Все права защищены
            </span>
            <a href="http://figma.com" target="_blank" rel="noopener noreferrer" className={styles.info}>Сделано Figma.info</a>
        </Container>
    )
}

export default LastLine