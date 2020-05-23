import React, { useEffect, useState } from 'react';
import Recipe from './Recipes';
import './App.css';


const App = () => {
  // use edamam.com to generate app id
  const APP_ID = 'your app id';
  // use edamam.com to generate app key
  const APP_KEY = 'your api key';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  // embed search query
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // searching keywords
  const updatesearch = e => {
    setSearch(e.target.value);
  }

  // search field will feature result
  const getsearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <React.Fragment>
      <div className="App">
        <form onSubmit={getsearch} className="search_form">
          <input className="search_bar" placeholder="What are you looking for" type="text" value={search} onChange={updatesearch} />
          <button className="search_btn" type="submit">Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
