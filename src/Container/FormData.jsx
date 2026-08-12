import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormData(props) {

    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [city, setCity] = useState();
    const [terms, setTerms] = useState();
    const [alldata, setAllData] = useState({});

    const handleSubmit = () => {
        event.preventDefault();
        console.log(name, gender, city, terms);

        setAllData({
            name,
            gender,
            city,
            terms
        })


    }
    console.log(alldata);


    return (
        <div className="container mt-4">

            <form action="" onSubmit={() => handleSubmit()}>
                <Form.Group className="mb-3">

                    <Form.Control placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <label htmlFor="">Gender</label>
                    <div onChange={(e) => setGender(e.target.value)}>
                        <Form.Check type="radio" name='gender' value='Male' aria-label="radio 1" label='Male' />
                        <Form.Check type="radio" name='gender' value='Female' aria-label="radio 1" label='Female' />
                    </div>
                </Form.Group>


                <Form.Group className="mb-3">

                    <Form.Select onChange={(e) => setCity(e.target.value)}>
                        <option value="0">select City</option>
                        <option value="Surat">Surat</option>
                        <option value="Mumbai">Mumbai</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" value="Can't Terms & Conditions" label="Can't Terms & Conditions" onChange={(e) => setTerms(e.target.value)} />
                </Form.Group>
                <Button variant="secondary" type={'submit'}>Submit</Button>
            </form>

            <div>
                <p> Name:{alldata?.name}</p>
                <p> Gender:{alldata?.gender}</p>
                <p> City:{alldata?.city}</p>
                <p>Terms:{alldata?.terms}</p>
            </div>
        </div>
    );
}

export default FormData;