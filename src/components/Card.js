import React from "react";

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <div className="element">
            <img className="element__photo" onClick={handleClick} src={props.card.link} alt={props.card.name} />
            <button className="element__delete-btn"></button>
            <div className="element__coption">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like_area">
                    <button className="element__like-button" type="button"></button>
                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;