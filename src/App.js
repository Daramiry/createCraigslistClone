// Import data
import { postings } from './postings.js'
// Import components
import './App.css';
import SearchBar from './searchBar';
import Directory from './directory';
import Gallery from './gallery';
import SideBar from './sidebar';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {     }
          <SearchBar />
          <Directory />
          <Gallery postings={postings}/>
          <SideBar />
      </div>
    </div>
  );
}

export default App;
