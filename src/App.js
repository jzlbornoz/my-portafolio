import './App.css';
import { Header } from './components/Header';
import { Experience } from './containers/Experience';
import { Landing } from './containers/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Experience />
    </div>
  );
}

export default App;
