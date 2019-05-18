import React from 'react';
import {Filter} from './Inputs';

const CityFilter  = (props) =>{
  return (
    <Filter onChange={props.changed} value={props.value}>
      <option value="">{props.default}</option>
      {props.items.map((item, id) => {
        return <option key={id} value={item.city}>{item.city}</option>
      })}
    </Filter>
  )
}

export default CityFilter;