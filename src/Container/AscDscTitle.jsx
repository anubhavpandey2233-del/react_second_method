import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function AscDscTitle(props) {

    const [ptitle, setTitle] = useState([]);

    const fetchProductTitle = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const productTitle = await response.json()
        // console.log(productTitle);

        setTitle(productTitle)
    }
    console.log(ptitle)


    useEffect(() => {
        fetchProductTitle()
    }, [])

    return (
        <div>
            {/* <Button variant="secondary" type={'submit'}>Asc/Dsc</Button> */}

            <div>
                {
                    ptitle.length === 0 ? <p>Loading...</p> : 
                        ptitle.map((v) => (
                            <p>{v.title}</p>
                        ))
                }
            </div>
        </div>
    );
}

export default AscDscTitle;