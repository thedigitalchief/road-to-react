import logo from './logo.svg';
import './App.css';
import React from 'react';


const title = "Road to React";

const App = () => {

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 3,
      points: 4,
      objectID: 0,

    },
  ];

  const[searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React' //using stored value, if it exsists, to set intial state of searchTerm in React's useState Hook
  );

  // callback handler
  const handleSearch = (event) => {
      setSearchTerm(event.target.value);

      localStorage.setItem('search', event.target.value); //so Search component can remember recent searches
  };

  const searchedStories = stories.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />
   
      <hr />

      <List list = {searchedStories} />
    </div>
  );
};


const Search = ({ search, onSearch }) => ( //destructuring the props object right away in the function signature of component
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search} //basic destructing of the props object in a React component
      onChange={onSearch} //so that the object's properties can be used more conviently
/> </div>
);


const List = ({ list }) => (
  <ul>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
  </ul> 
);

const Item = ({ item }) => (
  <li> 
    <span>
        <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li> 
);

export default App;



/*
const Search = () => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // B
  props.onSearch(event)

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />

      <p>Searching for <strong>{searchTerm}</strong>.</p> 
    </div>
  ); 
}; */

