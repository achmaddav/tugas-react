import { useEffect, useState } from 'react';
import './App.css';
import Feature from './pages/Feature';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [menu, setMenu] = useState(1);
  const [title, setTitle] = useState("");
  console.log(menu);

  useEffect(() => {
    if (menu === 1) {
      setTitle("Ini contoh useEffect");
    } else if (menu === 2) {
      setTitle("Ini menu feature");
    } else if (menu === 3) {
      setTitle("Ini menu about")
    }
  }, [menu])

  console.log(title);
  const content = () => {
    if (menu === 1) { return <Home /> }
    else if (menu === 2) { return <Feature /> }
    else if (menu === 3) { return <About /> }
  }

  return (
    <div className="App">
      {title}
      <Header onClick={setMenu} />
      {content()}
      <Footer/>
    </div>
  );
}

export default App;
