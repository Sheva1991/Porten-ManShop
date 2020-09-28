import React from 'react'
import { PropsType } from './types';
// import HtmlComponent from 'components/HtmlComponent';
import classNames from 'classnames'
import { CardActionArea, CardMedia, Card as CustomCard, CardContent, Typography } from '@material-ui/core';
import styles from './Card.module.scss'

const Card: React.FC<PropsType> = ({ img, title, text, small }) => {
    return (
        // <div className={styles.root}>
        //     <div className={classNames(styles.img, { [styles.sm]: small })}>
        //         <img src={img} alt={`img-${title}`} />
        //     </div>
        //     <div className={styles.body}>
        //         <HtmlComponent component='h4' variant='h4' className={styles.title}>{title}</HtmlComponent>
        //         <div className={styles.text}>
        //             {text}
        //         </div>
        //     </div>
        // </div>

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
