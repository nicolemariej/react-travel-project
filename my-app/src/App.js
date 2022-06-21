import './App.css';
import Header from './components/header';
import Card from './components/card';
import data from './data';

function App() {
  const cards = data.map(item =>{
    return (<Card
              key={item.title}
              {...item}
              />)
  })
  
  return (
    <div className="App">
      <h1>Hello World<h1/>
<Header />
{cards}
    </div>
  );
}

export default App;
