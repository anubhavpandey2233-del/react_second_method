import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from 'react-router';
import { getProductt } from '../redux/action/product.action';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/action/cart.action';



function Products(props) {

    // const [pdata, setPdata] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)

    const { id } = useParams();
    console.log(id);


    // const fetchProductData = async () => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const rdata = await response.json()
    //     console.log(rdata);
    //     setPdata(rdata) //setData of api

    //     let uniqueCategory = []

    //     rdata.map((v) => {
    //         if (!uniqueCategory.includes(v.category)) {
    //             uniqueCategory.push(v.category)
    //         }
    //     })

    //     setCategory(uniqueCategory)

    // }
    const dispatch = useDispatch();
    const p = useSelector(state => state.product)
    console.log(p.product);


    //reducername of index.js file
    const cartData = useSelector(state => state.cart)
    console.log(cartData);


    const product = () => {
        dispatch(getProductt())
    }
    // console.log(product);


    useEffect(() => {
        product()
    }, [])



    const searchData = () => {

        console.log(sort);

        let searchData = p.product.filter((v) => v.title.toLowerCase().includes(search.toLowerCase()) ||
            v.description.toLowerCase().includes(search.toLowerCase()) ||
            v.price.toString().includes(search)

        )

        console.log(searchData);


        if (sort === 'hl') {
            searchData.sort((a, b) => a.price - b.price)
        } else if (sort === 'lh') {
            searchData.sort((a, b) => b.price - a.price)
        }
        else if (sort === 'az') {
            searchData.sort((a, b) => a.title.localeCompare(b.title))
        }
        else if (sort === 'za') {
            searchData.sort((a, b) => b.title.localeCompare(a.title))
        }

        if (selectedCategory != 'all') {
            searchData = searchData.filter((v) => v.category === selectedCategory)
        }



        return searchData
    }



    let finalData = searchData();

    let perPage = 4;
    let page = Math.ceil(finalData.length / perPage) //0

    const pageData = () => {
        //20   0-4    5-9    10-14     15-19
        const startIndex = (currentPage - 1) * 4
        const endIndex = startIndex + perPage - 1

        console.log(startIndex, endIndex);


        let x = finalData.slice(startIndex, endIndex + 1)
        console.log(x);

        return x;
    }
    let paginationPage = pageData();

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

                    <ButtonGroup>
                        <ToggleButton
                            key={'all'}
                            id={`radio-${'all'}`}
                            type="radio"
                            variant={'outline-success'}
                            name="radio"
                            value={'all'}
                            checked={selectedCategory === 'all'}
                            onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                        >
                            {'all'}
                        </ToggleButton>
                        {

                            category.map((v, i) => (
                                <ToggleButton
                                    key={i}
                                    id={`radio-${i}`}
                                    type="radio"
                                    variant={'outline-success'}
                                    name="radio"
                                    value={v}
                                    checked={selectedCategory === v}
                                    onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                                >
                                    {v}
                                </ToggleButton>
                            ))

                        }

                    </ButtonGroup>
                </div>

                <div className='row' style={{ rowGap: '30px' }}>



                    {
                        p.product.length === 0 ? <Spinner style={{ margin: '0 0 0 820px' }} /> :
                            <>
                                {paginationPage?.map((v) => (
                                    <div className='col-3'>

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={v.image} style={{ height: '250px' }} />
                                            <Card.Body>
                                                <Card.Title>{v.title.length > 20 ? v.title.substring(0, 20) + '...' : v.title}</Card.Title>
                                                <Card.Text>
                                                    {v.price}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => dispatch(addToCart(v.id, v.price))}>Add to cart</Button>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                ))}

                                <Pagination>

                                    <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
                                    {
                                        Array.from({ length: page }, (_, i) =>

                                            <Pagination.Item onClick={() => setCurrentPage(i + 1)} active={currentPage == i + 1}>{i + 1}</Pagination.Item>)
                                    }

                                    <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === page} />

                                </Pagination>
                            </>
                    }
                </div>
            </div>


        </section >

    );
}

export default Products;