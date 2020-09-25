import React from 'react'
import styles from './Footer.module.scss'
import { Col, Container, Row } from 'react-bootstrap';
import Title from 'components/Title';
import SubscribeForm from 'components/Forms/SubscribeForm';
import CustomList from 'components/CustomList/CustomList';

const Footer: React.FC = () => {

    return (
        <footer className={styles.root}>
            <Container className={styles.container}>
                <Row className={styles.row}>
                    <Col className={styles.col} lg={4} md={12}>
                        <Title title='О магазине' tag='h3' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
                        </div>
                    </Col>
                    <Col className={styles.col} lg={4} md={12}>
                        <Title title='Категории' tag='h3' />
                        <CustomList className={styles.list} items={['часы', 'браслеты', 'ремни', 'ювелирные изделия', 'запонки',]} />
                    </Col>
                    <Col className={styles.col} lg={4} md={12}>
                        <Title title='РАссылка' tag='h3' />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
                        </div>
                        <SubscribeForm />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer