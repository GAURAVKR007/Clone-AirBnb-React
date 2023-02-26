// import logo from './logo.svg';
// import './App.css';
import './style.css'
import Navbar from './components/Navbar';
import  Hero from './components/Hero'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img = "../images/mclaren.jpg"
        rating = "5.0"
        reviewCount = "7"
        country="USA"
        title="Life Lesson with Mclern"
        price="2B"
      />
    </div>
  );
}

export default App;
