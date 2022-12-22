function Card() {
    return(
        <div className="card">
            <div className="favorit">
            <img src="/img/heart-unliked.svg" alt="heart-uliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="1" />
            <img src="" alt="" />
            <h5>кроссовки мужские Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9999 руб</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="imgplus" />
              </button>
            </div>
          </div>
    )
}

export default Card;