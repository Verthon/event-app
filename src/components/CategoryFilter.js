import React from 'react';
import {Filter} from './Inputs';

const CategoryFilter  = (props) =>{
  return (
    <Filter onChange={props.changed} value={props.value}>
      <option value="">{props.default}</option>
      {props.items.map((item, id) => {
        return <option key={id} value={item.category}>{item.category}</option>
      })}
    </Filter>
  )
}

export default CategoryFilter;