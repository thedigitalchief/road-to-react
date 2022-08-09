import logo from './logo.svg';
import './App.css';

function App = () => {


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

  const title = "Road to React";

  return (

    <div>
      <h1> Hello {title} World
      </h1>
    <List list = {stories} />

    </div>
  );
}

export default App;
