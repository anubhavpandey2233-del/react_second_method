import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";


function EmployeeData(props) {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [date, setDate] = useState();
    const [gender, setGender] = useState();
    const [allData, setAllData] = useState([])

    const handleSubmit = () => {
        event.preventDefault()
        console.log(name, address, date, gender);

        setAllData([{
            name,
            address,
            date,
            gender
        }])

    }

    return (
        <div className="container my-4">
            <Form onSubmit={() => handleSubmit()}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <textarea
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control type="date" placeholder="Joining Date" onChange={(e) => setDate(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <label htmlFor="">Gender</label>
                    <div onChange={(e) => setGender(e.target.value)}>
                        <Form.Check type="radio" name='gender' value='Male' aria-label="radio 1" label='Male' />
                        <Form.Check type="radio" name='gender' value='Female' aria-label="radio 1" label='Female' />
                    </div>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>


                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Date</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allData.map((v, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{v?.name}</td>
                                    <td>{v?.address}</td>
                                    <td>{v?.date}</td>
                                    <td>{v?.gender}</td>
                                    <td>
                                        <BsPencilSquare />
                                        <FaTrash className='ms-4' />
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default EmployeeData;