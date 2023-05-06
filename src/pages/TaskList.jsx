import React from 'react';
import {AddTask} from '../components/AddTask';
import {TaskItemList} from '../components/TaskItemList';


export const TaskList = (props) => {
  const { items, onAdd, onDone } = props;
  return (
    <main className="container">
      <AddTask
        onAdd = { onAdd }
      />
      <TaskItemList
        items  = { items }
        onDone = { onDone }
      />
    </main>
  )
}
