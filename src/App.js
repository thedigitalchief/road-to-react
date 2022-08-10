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

  const[searchTerm, setSearchTerm] = React.useState('React');

  // callback handler
  const handleSearch = (event) => {
      setSearchTerm(event.target.value);
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


const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search} //basic destructing of the props object in a React component
      onChange={onSearch} //so that the object's properties can be used more conviently
/> </div>
);


const List = (props) => (
  <div>
      <label htmlFor="search">Search: </label>
      <input id = "search" type ="text" onChange = {props.onSearch} />
  </div>
);


const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
</li> );


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

