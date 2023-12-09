import { useContext, useState } from 'react';
import './style.css';
import GoodsContext from '../../context/goods.context';
import GoodsComponent from '../goods';

const CounterComponent = (props) => {
 const { selectedGoods, addGoods } = useContext(GoodsContext);
 const goods = props.data
 const [data] = useState(goods);
 let sortedData = [...data];
 sortedData = sortedData.sort((a, b) => b.cost - a.cost);
 let limit = 40;
 let newArray = [];

 const autoDetectClick = () => {
  let sum = 0

  while (sum != limit) {
    for (const item of sortedData) {
      sum = newArray.reduce((acc, cur) => acc + cur.cost, 0);
      if (!newArray.includes(item)) {
        if (sum + item.cost <= limit) {
          newArray.push(item);
          sum += item.cost;
        }
      }
      if (sum === limit){
        break
      }
    }
    if (sum === limit){
        break
      }
    limit++;
  }

  // Add elements of newArray to selectedGoods
  newArray.forEach(item => addGoods(item));
 }

 let sum = selectedGoods.reduce((acc, cur) => {
  return acc + cur.cost;
 }, 0);

 return (
  <div className='cost-wrapper'>
   <div>{sum}/40</div>
   <div className='auto-detect' onClick={autoDetectClick}>auto-detect</div>
   <div className='selected-goods'>
    {
     selectedGoods
      .map(el => <GoodsComponent {...el} key={'selected' + el.id} />)
    }
   </div>
  </div>
 );
};

export default CounterComponent;
