import { useContext } from 'react';
import CampIcon from './camp-table.png';
import './style.css';
import GoodsContext from '../../context/goods.context';

const CampComponent = ( /*{ selectedGoods, removeAllGoods }*/ ) => {
 const { removeAllGoods, selectedGoods } = useContext(GoodsContext);
 const totalCostOfSelectedGoods = selectedGoods.reduce((acc, item) => acc + item.cost, 0);
 const isCampEnabled = totalCostOfSelectedGoods >= 40;
 
 const campClick = () => {
  if (isCampEnabled) {
   removeAllGoods();
  } 
 };

 return (
  <div className="camp">
   <img src={CampIcon} alt="Camp Icon" onClick={campClick} className={isCampEnabled ? 'enabled' : 'disabled'} />
  </div>
 );
};

export default CampComponent;