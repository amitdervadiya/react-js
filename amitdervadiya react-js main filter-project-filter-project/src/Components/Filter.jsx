import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './Filter.css'; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Filter3 from './Components/Filter3'

export default function Filter() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');

    const product = [
        { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
        { id: 2, name: "Headphones", price: 150, category: "Electronics" },
        { id: 3, name: "Keyboard", price: 75, category: "Electronics" },
        { id: 4, name: "Monitor", price: 300, category: "Electronics" },
        { id: 5, name: "Mouse", price: 50, category: "Electronics" },
        { id: 6, name: "Chair", price: 250, category: "Furniture" },
        { id: 7, name: "Desk", price: 500, category: "Furniture" },
        { id: 8, name: "Sofa", price: 900, category: "Furniture" },
        { id: 9, name: "Bookshelf", price: 180, category: "Furniture" },
        { id: 10, name: "Lamp", price: 60, category: "Furniture" },
        { id: 11, name: "Shoes", price: 120, category: "Apparel" },
        { id: 12, name: "Jacket", price: 200, category: "Apparel" },
        { id: 13, name: "T-shirt", price: 30, category: "Apparel" },
        { id: 14, name: "Jeans", price: 80, category: "Apparel" },
        { id: 15, name: "Hat", price: 40, category: "Apparel" },
        { id: 16, name: "Bicycle", price: 600, category: "Sports" },
        { id: 17, name: "Tennis Racket", price: 150, category: "Sports" },
        { id: 18, name: "Basketball", price: 30, category: "Sports" },
        { id: 19, name: "Football", price: 40, category: "Sports" },
        { id: 20, name: "Yoga Mat", price: 25, category: "Sports" },
        { id: 21, name: "Watch", price: 300, category: "Accessories" },
        { id: 22, name: "Sunglasses", price: 100, category: "Accessories" },
        { id: 23, name: "Backpack", price: 90, category: "Accessories" },
        { id: 24, name: "Belt", price: 45, category: "Accessories" },
        { id: 25, name: "Wallet", price: 75, category: "Accessories" },
        { id: 26, name: "Tablet", price: 800, category: "Electronics" },
        { id: 27, name: "Smartphone", price: 1000, category: "Electronics" },
        { id: 28, name: "Fridge", price: 1200, category: "Appliances" },
        { id: 29, name: "Microwave", price: 150, category: "Appliances" },
        { id: 30, name: "Washing Machine", price: 700, category: "Appliances" }
    ];

    let data = product.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()) && (category ? item.category === category : true)
    );
    let naviagte = useNavigate()
    const pricefilter = ()=>{
        naviagte('/pricefilter')
    }
    const categoryfilter = ()=>{
        naviagte('/categoryfilter')
    }
    return (
        <div className="filter-container">
            <h1 className="title">Product Filter</h1>
            <button onClick={pricefilter} style={{marginRight:'15px'}}>price</button>
            {/* <button onClick={categoryfilter}>category</button> */} <br />
            <TextField
                id="standard-basic"
                label="Product Name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                className="input-field"
            />
            <br /><br /><br />
    <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth className="form-control">
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value="">Select Category</MenuItem>
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Furniture">Furniture</MenuItem>
                        <MenuItem value="Apparel">Apparel</MenuItem>
                        <MenuItem value="Sports">Sports</MenuItem>
                        <MenuItem value="Accessories">Accessories</MenuItem>
                        <MenuItem value="Appliances">Appliances</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((e, i) => {
                            return (
                                <tr key={i} className="table-row">
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.category}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
