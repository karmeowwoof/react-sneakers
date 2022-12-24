import styles from './Card.module.scss'
import React from 'react';


function Card({onClickFavorite, title, imageUrl, price, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      onPlus({title, price, imageUrl});
      setIsAdded(!isAdded);
    }

    

    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite }>
            <img src="/img/heart-unliked.svg" alt="heart-uliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="1" />
            <img src="" alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <div >
                <img className={styles.plus} onClick={onClickPlus} width={11} height={11} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="imgplus" />
              </div>
            </div>
          </div>
    )
}

export default Card;