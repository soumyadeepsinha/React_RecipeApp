import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <React.Fragment>
      <div className={style.recipe}>
        <h1>{title}</h1>
        <p>Ingredients</p>
        <ol>
          {ingredients.map(ingredient => (
            <li className={style.ingredients}>{ingredient.text}</li>
          ))}
        </ol>
        <p>Containts <strong>{calories}</strong> Calories</p>
        <img className={style.image} src={image} alt="" />
      </div>
    </React.Fragment>
  )
}

export default Recipe