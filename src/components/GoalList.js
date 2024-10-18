import React from 'react';

const GoalList = ({ goals, deleteGoal, editGoal }) => {
  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <li key={goal.id} className="goal-item">
          <span>{goal.text}</span>
          <div>
            <button onClick={() => editGoal(goal.id)}>Edit</button>
            <button onClick={() => deleteGoal(goal.id)}>X</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
