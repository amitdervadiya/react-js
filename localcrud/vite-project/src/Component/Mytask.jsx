import React, { useEffect, useState } from 'react';
import { Button, Form, Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Mytask() {

    const [name, setName] = useState('');
    const [status, setStatus] = useState("pending");
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        let oldData = JSON.parse(localStorage.getItem("student")) || [];
        setData(oldData);
    }, []);

    const handleClick = () => {
        let newStudent = { id: data.length + 1, name, status: 'pending' };
        let oldData = JSON.parse(localStorage.getItem("student")) || [];

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
                        {index ? "Update" : "Add Task"}
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? data.map((e, i) => (
                                <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        <Button variant="info" onClick={() => handleEdit(e.id)} className="mr-2">
                                            Edit
                                        </Button>
                                        <Button variant="danger" onClick={() => handleDelete(e.id)} className="mr-2">
                                            Delete
                                        </Button>
                                        <Button variant={e.status === 'pending' ? "success" : "secondary"} onClick={() => handleStatusChange(e.id)}>
                                            {e.status === 'pending' ? "Mark as Complete" : "Mark as Pending"}
                                        </Button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
