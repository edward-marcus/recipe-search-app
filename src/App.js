import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './components/Recipe';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pasta');

  useEffect(() => {
    const getRecipes = async () => {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&to=50&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h1>Ideas for a delicious meal</h1>
      <form className='search-form' onSubmit={getSearch}>
        <input
          type='text'
          required
          className='search-bar'
          placeholder='Search for a delicious meal'
          value={search}
          onChange={updateSearch}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <Recipe
                key={uuidv4()}
                title={recipe.recipe.label}
                url={recipe.recipe.url}
                calories={recipe.recipe.calories}
                dietLabels={recipe.recipe.dietLabels}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                healthLabels={recipe.recipe.healthLabels}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
