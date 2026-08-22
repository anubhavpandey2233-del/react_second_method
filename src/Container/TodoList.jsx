import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Login } from '@mui/icons-material';
import Table from 'react-bootstrap/Table';
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";


function TodoList(props) {
    const [name, setName] = useState();
    const [add, setAdd] = useState();
    const [dept, setDept] = useState();
    const [data, setData] = useState();



    const handleSubmit = () => {
        event.preventDefault();

        let obj = {
            id: crypto.randomUUID(),
            name,
            add,
            dept
        }
        console.log(name, add, dept);

        setData([...data,obj]);
    }

    const handleDelete = (id) => {

        let deldata = data.findIndex((v)=>v.id==id) 
        console.log(deldata);

        let d=[...data] 
        d.splice(deldata,1)
        setData(d)
    }

    //35

    const handleEdit=(id)=>{
        let edata=data.find((v)=>v.id==id)
        setName(edata.name)
        setAdd(edata.add)
        setDept(edata.dept)
    }
   

    return (
        <div className='container my-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="enter  name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => setAdd(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Department Name</Form.Label>
                    <Form.Control type="text" placeholder="enter department" onChange={(e) => setDept(e.target.value)} />
                </Form.Group>
                <Button variant="secondary" type='submit'>Submit</Button>
            </Form>



            <Table striped bordered hover>
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
                    {data?.length > 0 ?
                        data?.map((v, i) => (
                            <tr key={v.id}>
                                <td>{i + 1}</td>
                                <td>{v?.name}</td>
                                <td>{v?.add}</td>
                                <td>{v?.dept}</td>
                                <td>
                                    <FaTrash onClick={() => handleDelete(v.id)} />
                                    <FaEdit onClick={() => handleEdit(v.id)} />
                                </td>
                            </tr>
                        ))

                        : ''
                    }

                </tbody>
            </Table>
        </div>


    );
}

export default TodoList;
