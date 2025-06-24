import React from 'react';
import GroupForm from './components/GroupForm';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Splitwise Clone</h1>
      <GroupForm />
      <ExpenseForm />
    </div>
  );
}

export default App;