import React, { useState } from 'react';
import img1 from './Photos/Home-appliances.jpg';
import img2 from './Photos/fan.jpg';
import img3 from './Photos/fridge.jpeg';
import img4 from './Photos/oven.jpg';
import img5 from './Photos/tv.jpg';
import img6 from './Photos/wash.jpeg';
import { TextField } from '@mui/material';
import CircularIntegration from './Acceptbtn';


export default function Electric() {
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

        if (category == 'ceiling fan') {
            setItem('ceiling fan');
            setImg(img2);
        }
        if (category == 'fridge') {
            setItem('fridge');
            setImg(img3);
        }
        if (category == 'oven') {
            setItem('oven');
            setImg(img4);
        }
        if (category == 'telivision') {
            setItem('telivision');
            setImg(img5);
        }
        if (category == 'washing machine') {
            setItem('washing machine');
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
                        <option value="ceiling fan">Ceiling fan</option>
                        <option value="fridge">Fridge</option>
                        <option value="oven">Oven</option>
                        <option value="telivision">telivision</option>
                        <option value="washing machine">Washing Machine</option>
                    </select>

                    {category === 'ceiling fan' &&
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
                    {category === 'fridge' &&
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
                    {category === 'oven' &&
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
                    {category === 'telivision' &&
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
                    {category === 'washing machine' &&
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
