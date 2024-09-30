import React, { useEffect, useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Mytask() {

    const [name, setName] = useState('');
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        setData(oldData);
    }, []);

    const handleClick = () => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        let newStudent = { id: Date.now(), name, status: 'pending' };

        if (index) {
            let updatedData = data.find((e) => e.id === index);
            updatedData.name = name;
            localStorage.setItem("student", JSON.stringify(data));
            setIndex(null);
        } else {
            oldData.push(newStudent);
            localStorage.setItem("student", JSON.stringify(oldData));
            setData(oldData);
        }

        setName('');
    };

    const handleDelete = (id) => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        oldData = oldData.filter((e) => e.id !== id);
        localStorage.setItem("student", JSON.stringify(oldData));
        setData(oldData);
    };

    const handleEdit = (id) => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        let editData = oldData.find((e) => e.id === id);
        setIndex(id);
        setName(editData.name);
    };

    const handleStatusChange = (id) => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].id === id) {
                oldData[i].status = oldData[i].status === 'pending' ? 'complete' : 'pending';
            }
        }
        localStorage.setItem("student", JSON.stringify(oldData));
        setData(oldData);
    };

    return (
        <Container className="my-4">
            <Row className="justify-content-center mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={name}
                            placeholder="Enter task name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Button onClick={handleClick} variant={index ? "warning" : "primary"} block>
                        {index ? "Update Task" : "Add Task"}
                    </Button>
                </Col>
            </Row>

            <Row>
                {data ? data.map((task, i) => {
                    return <Col md={4} className="mb-4" key={i}>
                        <Card className={`task-card ${task.status === 'complete' ? 'complete' : 'pending'}`}>
                            <Card.Body>
                                <Card.Title className="task-title">{task.id}</Card.Title>
                                <Card.Title className="task-title">{task.name}</Card.Title>
                                <Card.Text className="task-status">
                                    Status: <strong>{task.status}</strong>
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Button variant="info" onClick={() => handleEdit(task.id)}>
                                        Edit
                                    </Button>
                                    <Button variant="danger" onClick={() => handleDelete(task.id)}>
                                        Delete
                                    </Button>
                                    <Button
                                        variant={task.status === 'pending' ? "success" : "secondary"}
                                        onClick={() => handleStatusChange(task.id)}
                                    >
                                        {task.status === 'pending' ? "Mark Complete" : "Mark Pending"}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                }) :
                    <Col className="text-center">
                        <h5>No tasks available</h5>
                    </Col>
                }
            </Row>
        </Container>
    );
}
