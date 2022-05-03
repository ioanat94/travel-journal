import Navbar from './components/Navbar';
import Destination from './components/Destination';
import data from './data';

function App() {
  const destinations = data.map(destination => {
    return (
      <Destination 
        key={destination.id}
        destination={destination}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      {destinations}
    </div>
  );
}

export default App;