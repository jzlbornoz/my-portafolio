import './App.css';
import { Header } from './components/Header';
import { About } from './containers/About';
import { Landing } from './containers/Landing';
import { Projects } from './containers/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
