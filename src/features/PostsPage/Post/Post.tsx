import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { PropsType } from './types';
import styles from './Post.module.scss'

const Post: React.FC<PropsType> = ({ post }) => {
    return (
        <Card className={styles.root}>
            <CardContent>
                <Typography variant="h4" component="h4">
                    Номер статьи: {post.id}
                </Typography>
                <Typography variant="h3" component="h3">
                    Название статьи: {post.title}
                </Typography>
                <Typography variant="h5" component="p">
                    Содержание: {post.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post
