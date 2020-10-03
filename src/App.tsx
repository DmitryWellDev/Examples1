import React, {useState} from 'react';
import './App.css';
import ControledOnOff from './components/ControledOnOff/ControledOnOff';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {

  let [on, setOn] = useState(false)

    let [ratingValue, setRatingvalue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState(false)

  return (
    <div className="App">
      <ControledOnOff on={on} onChange={setOn}/>
        <Rating setRatingvalue={setRatingvalue} value={ratingValue}/>
        <Accordion title={'Menu'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>
    </div>
  );
}

export default App;
