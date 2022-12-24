import styles from './Card.module.scss'
import React from 'react';


function Card(props) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
      setIsAdded(!isAdded);
    }

    

    return(
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite }>
            <img src="/img/heart-unliked.svg" alt="heart-uliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="1" />
            <img src="" alt="" />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>
              <div >
                <img className={styles.plus} onClick={onClickPlus} width={11} height={11} src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="imgplus" />
              </div>
            </div>
          </div>
    )
}

export default Card;