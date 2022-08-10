import logo from './logo.svg';
import './App.css';


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

  const[searchTerm, setSearchTerm] = React.useState('');

  // callback handler
  // A
  const handleSearch = (event) => {
      setSearchTerm(event.target.value);
  };

  return (

    <div>
      <h1> Hello {title} World </h1>


      <Search onSearch={handleSearch} />
   
      <hr />

      <List list = {stories} />

    </div>
  );
};


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
};



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
