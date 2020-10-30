import React from 'react'
import { PropsType } from './types';
import classNames from 'classnames'
import { CardActionArea, Card as CustomCard, CardContent, Typography } from '@material-ui/core';
import styles from './Card.module.scss'

const Card: React.FC<PropsType> = ({ img, title, text, small }) => {
    return (
        <CustomCard className={styles.root}>
            <CardActionArea>
                {/* <CardMedia
                    className={classNames(styles.img, { [styles.sm]: small })}
                    image={img}
                    title={`img-${title}`}
                /> */}
                <div className={classNames(styles.img, { [styles.sm]: small })}>
                    <img src={img} alt={`img-${title}`} />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h4" className={styles.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" className={styles.text} component="p">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CustomCard>
    )
}

export default Card
