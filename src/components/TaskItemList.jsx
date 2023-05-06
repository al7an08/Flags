import React from "react";

import {TaskItem} from './TaskItem';
import "../App.css";


export const TaskItemList = (props) => {
  const { items, onDone } = props
  return (
    <ul className="notes">
      {
        items.map((item, index) => (
          <TaskItem
            item   = { item }
            key    = { index }
            index  = { index }
            onDone = { () => onDone(item) }
          />
        ))
      }
    </ul>
  )
}


