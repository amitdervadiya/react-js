import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adddata, deletedata, updatedata } from '../features/Counterslice';

export default function Counter() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);
  const [gender, setGender] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const count = useSelector((state) => state.Counterkey);

  const dispatch = useDispatch();

  const addrecord = () => {
    if (editId) {
      dispatch(updatedata({ id: editId, name, age, gender, isChecked }));
      setEditId(null);
    } else {
      dispatch(adddata({ id: Date.now(), name, age, gender, isChecked }));
    }

    setName('');
    setAge('');
    setGender('');
    setIsChecked(false);
  };

  const deleterecord = (id) => {
    dispatch(deletedata({ id }));
  };

  const editdata = (e) => {
    setName(e.name);
    setAge(e.age);
    setGender(e.gender);
    setIsChecked(e.isChecked);
    setEditId(e.id);
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

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}

          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Checkbox
      </label>
      <br />

      <button onClick={addrecord}>
        {editId ? 'Update' : 'Add'}
      </button>

      {count && count.students.length > 0 ?
        count.students.map((e, i) => {
          return <ul key={i}>
            <li>ID: {e.id}</li>
            <li>Name: {e.name}</li>
            <li>Age: {e.age}</li>
            <li>Gender: {e.gender}</li>
            <li>Checked: {e.isChecked ? 'agree' : 'Not agree'}</li>

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
