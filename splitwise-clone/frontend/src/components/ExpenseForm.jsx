import React, { useState } from 'react';
import axios from 'axios';

function ExpenseForm() {
  const [groupId, setGroupId] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');
  const [splitType, setSplitType] = useState('equal');
  const [splits, setSplits] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const splitArray = JSON.parse(splits);
    await axios.post(`http://localhost:8000/groups/${groupId}/expenses`, {
      description,
      amount: parseFloat(amount),
      paid_by: parseInt(paidBy),
      split_type: splitType,
      splits: splitArray,
    });
    alert('Expense added!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-6">
      <input type="text" placeholder="Group ID" value={groupId} onChange={(e) => setGroupId(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="border p-2 w-full" />
      <input type="text" placeholder="Paid By (User ID)" value={paidBy} onChange={(e) => setPaidBy(e.target.value)} className="border p-2 w-full" />
      <select value={splitType} onChange={(e) => setSplitType(e.target.value)} className="border p-2 w-full">
        <option value="equal">Equal</option>
        <option value="percentage">Percentage</option>
      </select>
      <textarea placeholder='Splits (JSON: [{"user_id":1},{"user_id":2}])' value={splits} onChange={(e) => setSplits(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;