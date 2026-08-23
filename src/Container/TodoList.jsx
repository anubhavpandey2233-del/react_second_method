import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function TodoList() {

    const [name, setName] = useState("");
    const [add, setAdd] = useState("");
    const [dept, setDept] = useState("");

    const [data, setData] = useState([]);


    const [editId, setEditId] = useState(null);



    const handleSubmit = (event) => {
        event.preventDefault();


        if (editId) {

            const updatedData = data.map((v) =>
                v.id === editId
                    ? {
                        id: v.id,
                        name,
                        add,
                        dept
                    }
                    : v
            );

            setData(updatedData);
            setEditId(null);

        } else {


            const obj = {
                id: crypto.randomUUID(),
                name: name,
                add: add,
                dept: dept
            };

            setData([...data, obj]);
        }


        setName("");
        setAdd("");
        setDept("");
    };



    const handleDelete = (id) => {

        const deldata = data.findIndex((v) => v.id === id);

        console.log(deldata);

        const d = [...data];

        d.splice(deldata, 1);

        setData(d);
    };



    const handleEdit = (id) => {

        const edata = data.find((v) => v.id === id);

        setName(edata.name);
        setAdd(edata.add);
        setDept(edata.dept);
        setEditId(id);
    };


    return (
        <div className='container my-4'>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Student Name</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>

                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={add}
                        onChange={(e) => setAdd(e.target.value)}
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Department Name</Form.Label>

                    <Form.Control
                        type="text"
                        placeholder="Enter department"
                        value={dept}
                        onChange={(e) => setDept(e.target.value)}
                    />
                </Form.Group>


                <Button variant="secondary" type="submit">
                    submit
                </Button>

            </Form>


            <Table striped bordered hover className="mt-4">

                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Student Name</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>


                <tbody>

                    {data.length > 0 ? (

                        data.map((v, i) => (

                            <tr key={v.id}>

                                <td>{i + 1}</td>

                                <td>{v.name}</td>

                                <td>{v.add}</td>

                                <td>{v.dept}</td>

                                <td>

                                    <FaTrash

                                        onClick={() => handleDelete(v.id)}
                                    />

                                    <FaEdit

                                        onClick={() => handleEdit(v.id)}
                                    />

                                </td>

                            </tr>

                        ))

                    ) : (

                        ''

                    )}

                </tbody>

            </Table>

        </div>
    );
}

export default TodoList;