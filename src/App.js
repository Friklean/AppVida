import React, { useState } from 'react';
import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const [goals, setGoals] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
  ]);
  const [newGoal, setNewGoal] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentGoalId, setCurrentGoalId] = useState(null);

  // Ajouter un nouvel objectif
  const addGoal = () => {
    if (newGoal.trim() === '') return;
    setGoals([...goals, { id: goals.length + 1, text: newGoal }]);
    setNewGoal(''); // Vider le champ après ajout
  };

  // Supprimer un objectif
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Activer le mode édition
  const editGoal = (id) => {
    const goalToEdit = goals.find((goal) => goal.id === id);
    setNewGoal(goalToEdit.text); // Remplir l'input avec le texte de l'objectif
    setIsEditing(true);
    setCurrentGoalId(id); // Sauvegarder l'ID de l'objectif en cours d'édition
  };

  // Enregistrer les modifications
  const updateGoal = () => {
    setGoals(
      goals.map((goal) =>
        goal.id === currentGoalId ? { ...goal, text: newGoal } : goal
      )
    );
    setIsEditing(false);
    setNewGoal(''); // Vider le champ après modification
    setCurrentGoalId(null); // Réinitialiser l'ID de l'objectif en cours d'édition
  };

  return (
    <div className="app">
     <div className="Title"><h1>Ur' Objectifs</h1></div>
      <div className="input-row">
        <input
          type="text"
          placeholder="Nouvel objectif..."
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button onClick={isEditing ? updateGoal : addGoal}>
          {isEditing ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </div>
      <GoalList goals={goals} deleteGoal={deleteGoal} editGoal={editGoal} />
    </div>
  );
};

export default App;
