import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function AscDscTitle(props) {

    const [ptitle, setTitle] = useState([]);
    const [sort, setSort] = useState(true)

    const fetchProductTitle = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const productTitle = await response.json()
        // console.log(productTitle);

        setTitle(productTitle)
    }
    console.log(ptitle)


    const ascDscData = [...ptitle].sort((a, b) => (
         sort ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)

       
    ));

   

    useEffect(() => {
        fetchProductTitle()
    }, [])

    return (
        <div>
            <Button variant="secondary" type={'submit'} onClick={() => setSort(!sort)} className='my-4'>Asc/Dsc</Button>

            <div>
                {
                    ptitle.length === 0 ? <p><Spinner /></p> :
                        ascDscData.map((v) => (
                            <p>{v.title}</p>
                        ))
                }
            </div>

        </div>
    );
}

export default AscDscTitle;