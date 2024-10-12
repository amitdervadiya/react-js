import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deletedata, updatedata } from '../features/Counterslice';

export default function Counter() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);

  const count = useSelector((state) => state.Counterkey);

  const dispatch = useDispatch();

  const addrecord = () => {
    if (editId) {
      dispatch(updatedata({ id: editId, name, age }));
      setEditId(null);
    } else {
      dispatch(adddata({ id: Date.now(), name, age }));
    }
    setName('');
    setAge('');
  };

  const deleterecord = (id) => {
    dispatch(deletedata({ id }));
  };

  const editdata = (record) => {
    setName(record.name);
    setAge(record.age);
    setEditId(record.id);
  };

  return (
    <>
      <h1>Counter with Redux</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addrecord}>
        {editId ? 'Update' : 'Add'}
      </button>

      {count.students ?
        count.students.map((e, i) => {
          return <ul key={i}>
            <li>ID: {e.id}</li>
            <li>Name: {e.name}</li>
            <li>Age: {e.age}</li>
            <button onClick={() => deleterecord(e.id)}>Delete</button>
            <button onClick={() => editdata(e)}>Edit</button>
          </ul>
        })
        :
        <p>No records found.</p>
      }
    </>
  );
}
