import React, { createRef, memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = createRef();
  const inputRef = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit} ref={formRef}>
      <input
        type="text"
        className="add-input"
        placeholder="Habit"
        ref={inputRef}
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
