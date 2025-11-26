import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Bio />
        <Projects />
      </main>
    </div>
  );
}

export default App;
