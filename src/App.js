import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
          {
            data.map(item => (
              <Card key={item.id} data={{...item}}/>
            ))
          }
      </div>
    </div>
  );
}

export default App;
