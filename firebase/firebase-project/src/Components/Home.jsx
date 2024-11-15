import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [userDetail, setUserDetail] = useState(null);
    const [taskList, setTaskList] = useState([]);
    const [index, setIndex] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (data) => {
            if (data) {
                setUser(data);
            } else {
                setUser(null);
            }
        });

    }, []);

    useEffect(() => {
        if (user) {
            getDoc(doc(db, 'users', user.uid)).then((data) => {
                setUserDetail(data.data());
            });
        }
    }, [user]);

    useEffect(() => {
        fetchUserTasks();
    }, [user]);


    const fetchUserTasks = async () => {
        if (user) {
            const querySnapshot = await getDocs(collection(db, "Todos"));
            const fetchData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setTaskList(fetchData);
        }
    };

    const handleTask = async () => {
        const obj = { userid: user.uid, task, priority };
        if (index == null) {

            await addDoc(collection(db, 'Todos'), obj)
                .then((data) => {
                    setTaskList(...taskList, obj)
                })

        }
        else {
            let updatedata = updateDoc(doc(db, "Todos", index), obj)
            fetchUserTasks();
            setIndex(null)
        }
        setTask('');
        setPriority('');
        fetchUserTasks();

    };

    const handleSignup = () => {
        navigate('/signin');
    };
    const handleDelete = async (id) => {
            
            await deleteDoc(doc(db, "Todos", id));
            let filterData = taskList.filter((e) => e.id !== id)
            setTaskList(filterData);
      
    }
    const handleUpdate = async (id) => {
        let edit = taskList.find(item => (item.id == id))
        setTask(edit.task)
        setPriority(edit.priority)
        setIndex(id)


    }
    return (
        <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">

            <div className="card shadow-lg mb-5 p-4" style={{ maxWidth: '600px', width: '100%' }}>
                <div className="card-body text-center">
                    <h2 className="mb-4">
                        Welcome, {userDetail ? userDetail.name : 'Guest'}!
                    </h2>
                    <p className="text-muted">
                        {userDetail
                            ? `It's great to have you back, ${userDetail.name}.`
                            : 'Please sign in to access your account.'}
                    </p>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="Enter task"
                            className="form-control mb-3"
                        />
                        <input
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            placeholder="Enter priority"
                            className="form-control mb-3"
                        />
                        <button className="btn btn-primary w-100 mb-2" onClick={handleTask} >
                            {
            index == null ? "add task" : "update task"
                            }
                        </button>
                        <button className="btn btn-secondary w-100" onClick={handleSignup}>
                            {userDetail ? 'Sign Out' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>


            <div className="w-100" style={{ maxWidth: '600px' }}>
                <h4 className="text-center mb-4">Your Tasks</h4>
                {taskList.length > 0 ? (
                    taskList.map((task, index) => (
                        <div key={index} className="card mb-3 shadow-sm">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title">{task.task}</h5>
                                    <p className="card-text text-muted">
                                        Priority: <strong>{task.priority}</strong>
                                    </p>
                                    <button onClick={() => handleDelete(task.id)}>delete</button>
                                    <button onClick={() => handleUpdate(task.id)}>edit</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No tasks found.</p>
                )}
            </div>
        </div>
    );
}
