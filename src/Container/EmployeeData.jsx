import React, { useEffect, useState } from 'react';
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
    const [edit, setEdit] = useState()
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(true)
    const [sortField, setSortField] = useState('')

    useEffect(() => {

        if (allData) {
            let empData = JSON.parse(localStorage.getItem("emp"))
            setAllData(empData)
        }

    }, [])


    const handleSubmit = () => {
        event.preventDefault()
        console.log(name, address, date, gender);

        let obj = {
            id: crypto.randomUUID(),
            name,
            address,
            date,
            gender
        }

        let localEmpData = JSON.parse(localStorage.getItem("emp"))
        console.log(localEmpData);

        if (localEmpData) {
            if (edit) {
                let index = allData.findIndex((v) => v.id == edit)
                console.log(index);

                let temp = [...allData]
                temp[index] = obj
                localStorage.setItem("emp", JSON.stringify(temp))
                setAllData(temp)
                setEdit()
            } else {
                localEmpData.push(obj);
                localStorage.setItem("emp", JSON.stringify(localEmpData))
                setAllData([...allData, obj])
            }

        } else {
            localStorage.setItem("emp", JSON.stringify([obj]));

            setAllData([obj])
        }



        //desturing empdata me obj add ho jayega 

        setName("")
        setAddress("")
        setDate("")
        setGender("")
    }

    const handleDelete = (id) => {
        //filter

        // let delData=allData.filter((v)=>v.id !=id)
        // console.log(delData);

        // setAllData(delData)

        // by splice method

        let delIndex = allData.findIndex((v) => v.id == id)
        let x = [...allData]
        console.log(delIndex);
        x.splice(delIndex, 1)
        console.log(x);

        setAllData(x)

        localStorage.setItem("emp", JSON.stringify(x))
    }

    const handleEdit = (id) => {
        let eData = allData.find((v) => v.id == id)
        setName(eData.name);
        setAddress(eData.address);
        setDate(eData.date);
        setGender(eData.gender)

        setEdit(eData.id)
        // console.log(edit);



    }

    const searchData = () => {
        console.log(search);

        let x = allData.filter((v) =>
            v.name.toLowerCase().includes(search.toLowerCase())
        );

        console.log(x);

        const sortData = x.sort((a, b) => {
            if (sortField == "name") {
                return sort
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }

            if (sortField == "add") {
                return sort
                    ? a.address.localeCompare(b.address)
                    : b.address.localeCompare(a.address);
            }

            if (sortField == "date") {
                return sort
                    ? a.date.localeCompare(b.date)
                    : b.date.localeCompare(a.date);
            }

            if (sortField == "gender") {
                return sort
                    ? a.gender.localeCompare(b.gender)
                    : b.gender.localeCompare(a.gender);
            }

            return 0;
        });

        return sortData;
    };
    let searchdt = searchData()
    return (
        <div className="container my-4">
            <Form onSubmit={() => handleSubmit()} className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Employee Name</Form.Label>
                    <Form.Control
                        value={name}
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <textarea
                        value={address}
                        className="form-control"
                        placeholder="Enter Address"
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Joining Date</Form.Label>
                    <Form.Control
                        value={date}
                        type="date"
                        placeholder="Joining Date"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <label htmlFor="">Gender</label>
                    <div value={gender} onChange={(e) => setGender(e.target.value)}>
                        <Form.Check type="radio" name='gender' value='Male' aria-label="radio 1" label='Male' />
                        <Form.Check type="radio" name='gender' value='Female' aria-label="radio 1" label='Female' />
                    </div>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <div className='my-4'>
                <Form.Control
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)} />
            </div>



            <div>


                <Table striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th onClick={() => { setSort(!sort)(setSortField("srno")) }}>Sr.no</th>
                            <th onClick={() => { setSort(!sort)(setSortField("name")) }}>Name</th>
                            <th onClick={() => { setSort(!sort)(setSortField("add")) }}>Address</th>
                            <th onClick={() => { setSort(!sort)(setSortField("date")) }} >Date</th>
                            <th onClick={() => { setSort(!sort)(setSortField("gender")) }}>Gender</th>
                            <th onClick={() => { setSort(!sort)(setSortField("action")) }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            searchdt.map((v, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{v?.name}</td>
                                    <td>{v?.address}</td>
                                    <td>{v?.date}</td>
                                    <td>{v?.gender}</td>
                                    <td>
                                        <BsPencilSquare onClick={() => handleEdit(v.id)} />
                                        <FaTrash className='ms-4' onClick={() => handleDelete(v.id)} />
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