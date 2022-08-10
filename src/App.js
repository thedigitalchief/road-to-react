import logo from './logo.svg';
import './App.css';
import React from 'react';

const title = "Road to React";


const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
);

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};


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

  const [searchTerm, setSearchTerm] = useSemiPersistentState(
      'search',
      'React'
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );  

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
            id="search"
            label="Search"
            value={searchTerm}
            onInputChange={handleSearch}
      />
      <Search search={searchTerm} onSearch={handleSearch} />
   
      <hr />

      <List list = {searchedStories} />
    </div>
  );
};

  const InputWithLabel = ({
      id,
    label,
    value,
    type = 'text', onInputChange,
    }) => ( <>
        <label htmlFor={id}>{label}</label>
        &nbsp;
        <input
    id={id}
    type={type}
          value={value}
          onChange={onInputChange}
        />
    </> );


const Search = ({ search, onSearch }) => ( //destructuring the props object right away in the function signature of component
  // fragments: wraps other elements into a single top-evel element w/o adding to rendered output
  // can use <React.Fragment></React.Fragment>
  <> 
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      value={search} //basic destructing of the props object in a React component
      onChange={onSearch} //so that the object's properties can be used more conviently
    /> 
  </>
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

