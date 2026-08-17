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




        return searchdt
    }


    const finalData = filterData();

    let perPage = 3;
    let page = Math.ceil(finalData.length / perPage)

    const pageData = () => {
        const startIndex = (currentPage - 1) * 3
        const endIndex = startIndex + perPage - 1

        console.log(startIndex, endIndex);

        let sortOrder = finalData.slice(startIndex, endIndex + 1)
        console.log(sortOrder);

        // let sortOrder = [...searchdt];


        if (sort?.mode) {
            if (sort?.by == 'name') {
                if (sort?.mode === 'asc') {
                    sortOrder = sortOrder?.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
                } else {
                    sortOrder = sortOrder?.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
                }
            } else if (sort?.by == 'add') {
                if (sort?.mode === 'asc') {
                    sortOrder = sortOrder?.sort((a, b) => a.address.toLowerCase().localeCompare(b.address.toLowerCase()))
                } else {
                    sortOrder = sortOrder?.sort((a, b) => b.address.toLowerCase().localeCompare(a.address.toLowerCase()))
                }
            } else if (sort?.by == 'gender') {
                if (sort?.mode === 'asc') {
                    sortOrder = sortOrder?.sort((a, b) => a)
                } else {
                    sortOrder = sortOrder?.sort((a, b) => b.gender.toLowerCase().localeCompare(a.gender.toLowerCase()))
                }
            } else if (sort?.by == 'date') {
                if (sort?.mode === 'asc') {
                    sortOrder = sortOrder?.sort((a, b) => new Date(a.date) - new Date(b.date))
                } else {
                    sortOrder = sortOrder?.sort((a, b) => new Date(b.date) - new Date(a.date))
                }
            }
        }

        return sortOrder;
    }

    let pagination = pageData()


    return (
        <div className="bg-light min-vh-100 py-4">

            <div className="container">

                {/* Page Header */}
                <div className="mb-4">
                    <h2 className="fw-bold text-primary mb-1">
                        Employee Management
                    </h2>

                    <p className="text-secondary mb-0">
                        Add, edit and manage employee records
                    </p>
                </div>


                {/* Employee Form */}
                <div className="card border-0 shadow-sm rounded-4 mb-4">

                    <div className="card-header bg-primary text-white border-0 rounded-top-4 py-3">
                        <h5 className="mb-0 fw-semibold">
                            {edit ? "Edit Employee" : "Add New Employee"}
                        </h5>
                    </div>

                    <div className="card-body p-4">

                        <Form onSubmit={handleSubmit}>

                            <div className="row">

                                {/* Name */}
                                <div className="col-md-6 mb-3">

                                    <Form.Label className="fw-semibold">
                                        Employee Name
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter employee name"
                                        value={name || ""}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        className="py-2"
                                    />

                                </div>


                                {/* Date */}
                                <div className="col-md-6 mb-3">

                                    <Form.Label className="fw-semibold">
                                        Joining Date
                                    </Form.Label>

                                    <Form.Control
                                        type="date"
                                        value={date || ""}
                                        onChange={(e) =>
                                            setDate(e.target.value)
                                        }
                                        className="py-2"
                                    />

                                </div>


                                {/* Address */}
                                <div className="col-md-8 mb-3">

                                    <Form.Label className="fw-semibold">
                                        Address
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter employee address"
                                        value={address || ""}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />

                                </div>


                                {/* Gender */}
                                <div className="col-md-4 mb-3">

                                    <Form.Label className="fw-semibold">
                                        Gender
                                    </Form.Label>

                                    <div className="border rounded-3 p-3">

                                        <Form.Check
                                            type="radio"
                                            name="gender"
                                            label="Male"
                                            value="Male"
                                            checked={gender === "Male"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            className="mb-2"
                                        />

                                        <Form.Check
                                            type="radio"
                                            name="gender"
                                            label="Female"
                                            value="Female"
                                            checked={gender === "Female"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Buttons */}
                            <div className="d-flex gap-2">

                                <Button
                                    variant={edit ? "warning" : "primary"}
                                    type="submit"
                                    className="px-4"
                                >
                                    {edit ? "Update Employee" : "Add Employee"}
                                </Button>

                                {edit && (

                                    <Button
                                        variant="secondary"
                                        type="button"
                                        onClick={() => {
                                            setEdit();
                                            setName("");
                                            setAddress("");
                                            setDate("");
                                            setGender("");
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                )}

                            </div>

                        </Form>

                    </div>

                </div>


                {/* Employee Table */}
                <div className="card border-0 shadow-sm rounded-4">

                    <div className="card-body p-4">

                        {/* Table Header */}
                        <div className="row align-items-center mb-4">

                            <div className="col-md-6">
                                <h5 className="fw-bold mb-1">
                                    Employee List
                                </h5>

                                <small className="text-secondary">
                                    Manage employee information
                                </small>
                            </div>

                            <div className="col-md-6 mt-3 mt-md-0">

                                <Form.Control
                                    type="text"
                                    placeholder="🔍 Search employee..."
                                    value={search}
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                />

                            </div>

                        </div>


                        {/* Table */}
                        <div className="table-responsive">

                            <Table
                                striped
                                bordered
                                hover
                                responsive
                                className="align-middle text-center mb-0"
                            >

                                <thead className="table-primary">

                                    <tr>

                                        <th>Sr.no</th>

                                        <th
                                            onClick={() =>
                                                handleSort("name")
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                        >
                                            Name{" "}

                                            {sort?.by === "name" &&
                                                (
                                                    sort?.mode === "asc"
                                                        ? <IoIosArrowUp />
                                                        : <IoIosArrowDown />
                                                )
                                            }

                                        </th>


                                        <th
                                            onClick={() =>
                                                handleSort("add")
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                        >
                                            Address{" "}

                                            {sort?.by === "add" &&
                                                (
                                                    sort?.mode === "asc"
                                                        ? <IoIosArrowUp />
                                                        : <IoIosArrowDown />
                                                )
                                            }

                                        </th>


                                        <th
                                            onClick={() =>
                                                handleSort("date")
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                        >
                                            Joining Date{" "}

                                            {sort?.by === "date" &&
                                                (
                                                    sort?.mode === "asc"
                                                        ? <IoIosArrowUp />
                                                        : <IoIosArrowDown />
                                                )
                                            }

                                        </th>


                                        <th
                                            onClick={() =>
                                                handleSort("gender")
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                        >
                                            Gender{" "}

                                            {sort?.by === "gender" &&
                                                (
                                                    sort?.mode === "asc"
                                                        ? <IoIosArrowUp />
                                                        : <IoIosArrowDown />
                                                )
                                            }

                                        </th>


                                        <th>
                                            Action
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {pagination.length > 0 ? (

                                        pagination.map((v, i) => (

                                            <tr key={v.id}>

                                                <td className="fw-semibold">
                                                    {(currentPage - 1) *
                                                        perPage +
                                                        i +
                                                        1}
                                                </td>

                                                <td className="fw-semibold">
                                                    {v?.name}
                                                </td>

                                                <td>
                                                    {v?.address}
                                                </td>

                                                <td>
                                                    {v?.date}
                                                </td>

                                                <td>

                                                    <span
                                                        className={
                                                            v.gender === "Male"
                                                                ? "badge bg-info text-dark"
                                                                : "badge bg-danger"
                                                        }
                                                    >
                                                        {v?.gender}
                                                    </span>

                                                </td>


                                                {/* Action */}
                                                <td>

                                                    <Button
                                                        variant="outline-primary"
                                                        size="sm"
                                                        className="me-2"
                                                        title="Edit"
                                                        onClick={() =>
                                                            handleEdit(v.id)
                                                        }
                                                    >
                                                        <BsPencilSquare />
                                                    </Button>


                                                    <Button
                                                        variant="outline-danger"
                                                        size="sm"
                                                        title="Delete"
                                                        onClick={() =>
                                                            handleDelete(v.id)
                                                        }
                                                    >
                                                        <FaTrash />
                                                    </Button>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="6"
                                                className="py-5 text-secondary"
                                            >
                                                No employee found 😕
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </Table>

                        </div>


                        {/* Bottom Pagination */}
                        {page > 0 && (

                            <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">

                                <small className="text-secondary">
                                    Showing {pagination.length} of{" "}
                                    {finalData.length} employees
                                </small>


                                <Pagination className="mb-0">

                                    <Pagination.Prev
                                        disabled={currentPage === 1}
                                        onClick={() =>
                                            setCurrentPage(
                                                currentPage - 1
                                            )
                                        }
                                    />


                                    {Array.from(
                                        { length: page },
                                        (_, i) => (

                                            <Pagination.Item
                                                key={i}
                                                active={
                                                    currentPage === i + 1
                                                }
                                                onClick={() =>
                                                    setCurrentPage(i + 1)
                                                }
                                            >
                                                {i + 1}
                                            </Pagination.Item>

                                        )
                                    )}


                                    <Pagination.Next
                                        disabled={
                                            currentPage === page
                                        }
                                        onClick={() =>
                                            setCurrentPage(
                                                currentPage + 1
                                            )
                                        }
                                    />

                                </Pagination>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EmployeeData;