import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import TextField from '@mui/material/TextField';


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
            const Snapshot = await getDocs(collection(db, "Todos"));
            const fetchData = Snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setTaskList(fetchData);
        } uu
    };

    const handleTask = async () => {
        const obj = { userid: user.uid, task, priority };
        if (index == null) {

            await addDoc(collection(db, 'Todos'), obj)
                .then((data) => {
                    console.log(data.data())
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
        <div className="container vh-100 d-flex flex-column align-items-center justify-content-center mt-5">

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
                        <TextField id="outlined-basic" label="Enter task" variant="outlined"
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}

                            className="form-control mb-3"
                        />
                        <TextField id="outlined-basic" label="Enter priority" variant="outlined"
                            type="text"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}

                            className="form-control mb-3"
                        />
                        <button className="btn btn-primary w-100 mb-2" onClick={handleTask} >
                            {
                                index == null ? "Add task" : "Update task"
                            }
                        </button>
                        <button className="btn btn-secondary w-100" onClick={handleSignup}>
                            {userDetail ? 'Sign Out' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>


            <div className="w-100 slide" style={{ maxWidth: '600px', margin: 'auto' }} >
                <h4 className="text-center mb-4">Your Tasks</h4>
                {
                    taskList.length > 0 ?

                        taskList.filter((e) => user.uid == e.userid).map((task, index) => {

                            return <div key={index} className="card mb-4 shadow-sm border-0 rounded-3 task-card ">
                                <div className="card-body d-flex justify-content-between align-items-center ">
                                    <div>
                                        <h5 className="card-title text-dark mb-2">{task.task}</h5>
                                        <p className="card-text text-muted mb-3">
                                            Priority: <strong className="text-primary">{task.priority}</strong>
                                        </p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button
                                            onClick={() => handleUpdate(task.id)}
                                            className="btn btn-outline-info btn-sm edit-btn"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(task.id)}
                                            className="btn btn-outline-danger btn-sm delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                        : (
                            <p className="text-center text-muted">No tasks found.</p>
                        )
                }

            </div>

        </div >
    );
}
