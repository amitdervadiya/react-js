import React, { useState } from 'react';
import img1 from './Photos/furniture.jpg'

import { TextField } from '@mui/material';
import CircularIntegration from './Acceptbtn';


export default function Furniture() {
    const [category, setCategory] = useState('');
    const [warranty, setWarranty] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    // const [pricearr, setPricearr] = useState('');
    const [item, setItem] = useState('electric');
    const [img, setImg] = useState(img1);
    const [brandarr, setBrandarr] = useState('');
    const [warrantyarr, setWarrantyarr] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();

        if (category == 'chair') {
            setItem('chair');
            setImg(img2);
        }
        if (category == 'table') {
            setItem('table');
            setImg(img3);
        }
        if (category == 'cupboard') {
            setItem('cupboard');
            setImg(img4);
        }
        if (category == 'bed') {
            setItem('bed');
            setImg(img5);
        }
        if (category == 'cabinets') {
            setItem('cabinets');
            setImg(img6);
        }
        if (brand == '') {
            setBrandarr('Enter brand name');
        } else {
            setBrandarr('');
        }
        // if (price == '') {
        //     setPricearr('Enter price');
        // } else {
        //     setPricearr('');
        // }
        if (warranty == '') {
            setWarrantyarr('Enter warranty');
        } else {
            setWarrantyarr('');
        }




    };

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <select
                        name="category"
                        id="category"
                        onChange={(e) => setCategory(e.target.value)}
                        className="dropdown">
                        <option value="">Choose item</option>
                        <option value="chair">chair</option>
                        <option value="table">table</option>
                        <option value="cupboard">cupboard</option>
                        <option value="bed">bed</option>
                        <option value="cabinets">cabinets</option>
                    </select>

                    {category === 'chair' &&
                        <form className='faninput' onSubmit={(e) => handlesubmit(e)}>
                            <TextField id="brand" label="Enter brand name" variant="standard" onChange={(e) => setBrand(e.target.value)} />
                            <span className="error-message">{brandarr}</span>
                            <TextField id="warranty" label="Enter warranty" variant="standard" type='number' onChange={(e) => setWarranty(e.target.value)} />
                            <span className="error-message">{warrantyarr}</span>
                            <TextField id="price" label="Enter price" variant="standard" onChange={(e) => setPrice(e.target.value)} />
                            <span className="error-message">{pricearr}</span>
                            {/* <button type='submit' className="submit-button">Submit</button> */}
                            <CircularIntegration />
                        </form>
                    }
                    {category === 'table' &&
                        <form className='faninput' onSubmit={(e) => handlesubmit(e)}>
                            <TextField id="brand" label="Enter brand name" variant="standard" onChange={(e) => setBrand(e.target.value)} />
                            <span className="error-message">{brandarr}</span>
                            <TextField id="warranty" label="Enter warranty" variant="standard" type='number' onChange={(e) => setWarranty(e.target.value)} />
                            <span className="error-message">{warrantyarr}</span>
                            <TextField id="price" label="Enter price" variant="standard" />
                            <span className="error-message">{pricearr}</span>
                            {/* <button type='submit' className="submit-button">Submit</button> */}
                            <CircularIntegration />
                        </form>
                    }
                    {category === 'cupboard' &&
                        <form className='faninput' onSubmit={(e) => handlesubmit(e)}>
                            <TextField id="brand" label="Enter brand name" variant="standard" onChange={(e) => setBrand(e.target.value)} />
                            <span className="error-message">{brandarr}</span>
                            <TextField id="warranty" label="Enter warranty" variant="standard" type='number' onChange={(e) => setWarranty(e.target.value)} />
                            <span className="error-message">{warrantyarr}</span>
                            <TextField id="price" label="Enter price" variant="standard" />
                            <span className="error-message">{pricearr}</span>
                            {/* <button type='submit' className="submit-button">Submit</button> */}
                            <CircularIntegration />
                        </form>
                    }
                    {category === 'bed' &&
                        <form className='faninput' onSubmit={(e) => handlesubmit(e)}>
                            <TextField id="brand" label="Enter brand name" variant="standard" onChange={(e) => setBrand(e.target.value)} />
                            <span className="error-message">{brandarr}</span>
                            <TextField id="warranty" label="Enter warranty" variant="standard" type='number' onChange={(e) => setWarranty(e.target.value)} />
                            <span className="error-message">{warrantyarr}</span>
                            <TextField id="price" label="Enter price" variant="standard" />
                            <span className="error-message">{pricearr}</span>
                            {/* <button type='submit' className="submit-button">Submit</button> */}
                            <CircularIntegration />
                        </form>
                    }
                    {category === 'cabinets' &&
                        <form className='faninput' onSubmit={(e) => handlesubmit(e)}>
                            <TextField id="brand" label="Enter brand name" variant="standard" onChange={(e) => setBrand(e.target.value)} />
                            <span className="error-message">{brandarr}</span>
                            <TextField id="warranty" label="Enter warranty" variant="standard" type='number' onChange={(e) => setWarranty(e.target.value)} />
                            <span className="error-message">{warrantyarr}</span>
                            <TextField id="price" label="Enter price" variant="standard" />
                            <span className="error-message">{pricearr}</span>
                            {/* <button type='submit' className="submit-button">Submit</button>
                             */}
                            <CircularIntegration />
                        </form>
                    }
                </div>
            </div>

        </>
    );
}
