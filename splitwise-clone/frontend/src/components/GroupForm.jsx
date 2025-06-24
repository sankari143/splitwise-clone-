import React, { useState } from 'react';
import axios from 'axios';

function GroupForm() {
  const [name, setName] = useState('');
  const [userIds, setUserIds] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ids = userIds.split(',').map(Number);
    await axios.post('http://localhost:8000/groups', {
      name,
      user_ids: ids,
    });
    alert('Group created!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Group name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="User IDs (comma-separated)"
        value={userIds}
        onChange={(e) => setUserIds(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Create Group
      </button>
    </form>
  );
}

export default GroupForm;