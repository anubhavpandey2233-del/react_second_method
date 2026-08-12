import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function Products(props) {

    const [pdata, setPdata] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState([])

    const fetchProductData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const rdata = await response.json()
        console.log(rdata);
        setPdata(rdata) //setData of api

        let uniqueCategory = []

        rdata.map((v) => {
            if (!uniqueCategory.includes(v.category)) {
                uniqueCategory.push(v.category)
            }
        })

        setCategory(uniqueCategory)

    }


    useEffect(() => {
        fetchProductData()
    }, [])


    const searchData = () => {
        console.log(sort);

        let searchData = pdata.filter((v) => v.title.toLowerCase().includes(search.toLowerCase()) ||
            v.description.toLowerCase().includes(search.toLowerCase()) ||
            v.price.toString().includes(search)

        )

        if (sort === 'hl') {
            pdata.sort((a, b) => a.price - b.price)
        } else if (sort === 'lh') {
            pdata.sort((a, b) => b.price - a.price)
        }
        else if (sort === 'az') {
            pdata.sort((a, b) => a.title.localeCompare(b.title))
        }
        else if (sort === 'za') {
            pdata.sort((a, b) => b.title.localeCompare(a.title))
        }



        return searchData
    }

    let finalData = searchData();

    return (
        <section>
            <h2 className='text-center mt-4 mb-4'>Products</h2>
            <div className='container'>

                <div className='row my-4'>
                    <div className="col-6">
                        <Form.Select aria-label="Default select example" onChange={(e) => setSort(e.target.value)}>
                            <option>--select anything--</option>
                            <option value="hl">High price to low</option>
                            <option value="lh">Low price to high</option>
                            <option value="az">A to z</option>
                            <option value="za">Z to A</option>
                        </Form.Select>
                    </div>
                    <div className="col-6">

                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            placeholder='search'
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>
                </div>
                <div>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1} onClick={(e) => setCategory(e.target.value)}>
                        {
                            category.map((v) => (
                                <ToggleButton id="tbg-radio-1" value={1}>
                                    {v}
                                </ToggleButton>
                            ))
                        }

                    </ToggleButtonGroup>
                </div>

                <div className='row' style={{ rowGap: '30px' }}>



                    {
                        pdata === 0 ? <p>Loading...</p> :
                            finalData?.map((v) => (
                                <div className='col-3'>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={v.image} style={{ height: '250px' }} />
                                        <Card.Body>
                                            <Card.Title>{v.title.length > 20 ? v.title.substring(0, 20) + '...' : v.title}</Card.Title>
                                            <Card.Text>
                                                {v.price}
                                            </Card.Text>
                                            <Button variant="primary">Add to cart</Button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            ))

                    }
                </div>
            </div>

            <Spinner style={{ margin: '0 0 0 820px' }} />
        </section >

    );
}

export default Products;