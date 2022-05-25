import React, { useState } from 'react';
import Habit from './habit';

const Habits = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = (habit) => {
    console.log(`handleIncrement: ${habit.name}`);
  };

  const handleDecrement = (habit) => {
    console.log(`handleDecrement: ${habit.name}`);
  };

  const handleDelete = (habit) => {
    console.log(`handleDelete: ${habit.name}`);
  };

  return (
    <ul>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default Habits;
