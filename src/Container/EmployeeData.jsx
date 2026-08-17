import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Pagination from 'react-bootstrap/Pagination';


function EmployeeData(props) {

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [date, setDate] = useState();
    const [gender, setGender] = useState();
    const [allData, setAllData] = useState([])
    const [edit, setEdit] = useState()
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState({ mode: null, by: '' })
    const [currentPage, setCurrentPage] = useState(1)

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
        console.log(allData);


        let x = allData?.filter((v) => v?.name?.toLowerCase()?.includes(search?.toLowerCase()))
        console.log(x);

        return x

    }
    let searchdt = searchData()

    const handleSort = (colName) => {

        let sortStatus;

        if (sort?.mode) {
            if (sort?.mode === 'asc') {
                sortStatus = 'desc'
            } else {
                sortStatus = 'asc'
            }
        } else {
            sortStatus = 'desc'
        }

        setSort({ mode: sortStatus, by: colName })
    }
    console.log("after render", sort);

    const filterData = () => {
        console.log("filter", sort);
        console.log(searchdt);

        let sortOrder = [...searchdt];




        if (sort?.mode) {
            if (sort?.by == 'name') {
                if (sort?.mode === 'asc') {
                    sortOrder = searchdt?.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
                } else {
                    sortOrder = searchdt?.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
                }
            } else if (sort?.by == 'add') {
                if (sort?.mode === 'asc') {
                    sortOrder = searchdt?.sort((a, b) => a.address.toLowerCase().localeCompare(b.address.toLowerCase()))
                } else {
                    sortOrder = searchdt?.sort((a, b) => b.address.toLowerCase().localeCompare(a.address.toLowerCase()))
                }
            } else if (sort?.by == 'gender') {
                if (sort?.mode === 'asc') {
                    sortOrder = searchdt?.sort((a, b) => a)
                } else {
                    sortOrder = searchdt?.sort((a, b) => b.gender.toLowerCase().localeCompare(a.gender.toLowerCase()))
                }
            } else if (sort?.by == 'date') {
                if (sort?.mode === 'asc') {
                    sortOrder = searchdt?.sort((a, b) => new Date(a.date) - new Date(b.date))
                } else {
                    sortOrder = searchdt?.sort((a, b) => new Date(b.date) - new Date(a.date))
                }
            }
        }


        return searchdt
    }


    const finalData = filterData();

    let perPage = 3;
    let page = Math.ceil(finalData.length / perPage)

    const pageData = () => {
        const startIndex = (currentPage - 1) * 3
        const endIndex = startIndex + perPage - 1

        console.log(startIndex, endIndex);


        let x = finalData.slice(startIndex, endIndex + 1)
        console.log(x);

        return x;
    }

    let pagination = pageData()


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
                            <th>Sr.no</th>
                            <th onClick={() => handleSort('name')}>
                                Name
                                {
                                    sort?.by === 'name' && sort?.mode ?
                                        sort?.by === 'name' && sort?.mode === 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> :
                                        null
                                }
                            </th>
                            <th onClick={() => handleSort('add')}>
                                Address
                                {
                                    sort?.by === 'add' && sort?.mode ?
                                        sort?.by === 'add' && sort?.mode === 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> :
                                        null
                                }
                            </th>
                            <th onClick={() => handleSort('date')}>
                                Date
                                {
                                    sort.by === 'date' && sort?.mode ?
                                        sort.by === 'date' && sort?.mode === 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> :
                                        null
                                }
                            </th>
                            <th onClick={() => handleSort('gender')}>
                                Gender
                                {
                                    sort?.by === 'gender' && sort?.mode ?
                                        sort?.by === 'gender' && sort?.mode === 'asc' ? <IoIosArrowDown /> : <IoIosArrowUp /> :
                                        null
                                }
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pagination?.map((v, i) => (
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
                <Pagination>

                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                    {
                        Array.from({ length: page }, (_, i) =>

                            <Pagination.Item onClick={() => setCurrentPage(i + 1)} active={currentPage == i + 1}>{i + 1}</Pagination.Item>)
                    }

                    <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === page} />

                </Pagination>
            </div>
        </div>
    );
}

export default EmployeeData;