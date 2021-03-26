import React, {useState} from 'react';
import './App.css';
import ControledOnOff from './components/ControledOnOff/ControledOnOff';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {Select} from "./components/Select/Select";
import Parient from "./components/HOC/parient";

const App = React.memo(() => {

  let [on, setOn] = useState(false)

    let [ratingValue, setRatingvalue] = useState<RatingValueType>(0)

    let [collapsed, setCollapsed] = useState(false)

  const [changeTitle, setChangeTitle] = useState('Menu')

  const onChange = (value:any) => {
    items.map(i => {
      if (i.itemValue === value) {
        setChangeTitle(i.title)
      }

    })
  }

  const items = [
    {title: 'New York', itemValue: 1},
    {title: 'Chicago', itemValue: 2},
    {title: 'Washington', itemValue: 3},
    {title: 'Muami', itemValue: 4},
  ]

  return (
    <div className="App">
      <ControledOnOff on={on} onChange={setOn}/>
        <Rating setRatingvalue={setRatingvalue} value={ratingValue}/>
        {/*<Accordion title={'Menu'} setCollapsed={() => {setCollapsed(!collapsed)}} collapsed={collapsed}/>*/}
        <Select value={changeTitle} onChange={onChange} items={items}/>
        <Parient/>
    </div>
  );
})

export default App;
