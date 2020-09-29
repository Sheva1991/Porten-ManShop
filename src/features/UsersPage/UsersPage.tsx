import HtmlComponent from 'components/HtmlComponent'
import React, { memo } from 'react'
import User from './components/User'
import styles from './UsersPage.module.scss'

const UsersPage = memo(() => {
    const data = [
        {
            id: 0,
            name: '1',
            email: '2',
            photo: 'https://i1.wp.com/itc.ua/wp-content/uploads/2016/05/scarlett-johansson-s-black-widow-will-finally-star-in-her-own-movie-marvel-studios-969631.jpg?quality=100&strip=all&ssl=1',
            posts: [
                {
                    id: 3,
                    title: '4',
                    body: '5'
                }
            ]

        }
    ]
    return (
        <div className={styles.root}>
            <HtmlComponent className={styles.title} variant='h3' component='h3' title='Пользователи' />
            <div className={styles.content}>
                {data.map((user) =>
                    <div className={styles.item} key={user.id}>
                        <User user={user} />
                    </div>
                )
                }
            </div>
        </div>
    )
}
)

export default UsersPage
