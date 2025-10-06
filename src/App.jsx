import { useEffect, useState } from 'react';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from './Routes';

function App() {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
}, [])

  return (
    <>
      <Header />
      <Routes animate={animate} setAnimate={setAnimate}/>
      <Footer />
    </>
  )
}

export default App
