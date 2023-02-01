import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Styles/AddProduct.css';
import Navbar from './Navbar';
export default function AddProduct({ size, handleDataSubmission }) {
    const [cat, setCat] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');
    const [inventory, setInventory] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [longDesc, setLongDesc] = useState('');
    const [perUnitPrice, setperUnitPrice] = useState('');
    const [flag, setFlag] = useState('');
    const [confirm, setConfirm] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirm(true);
        handleDataSubmission(cat, name, url, date, inventory, shortDesc, longDesc, perUnitPrice, flag);
    }
    return (
        <div>
            <Navbar size={size} />
            <h1>Enter Product Details</h1>
            {confirm && <Alert variant='success'>Your Product has been added..Thank you.</Alert>}
            <div className="mainform">
                <form action="">
                    <div className="productCategory commomOne">
                        <label htmlFor="category">Product Category:-</label>
                        <select name="category" id="category" style={{ width: "30%" }} onChange={(e) => setCat(e.target.value)}>
                            <option value="men's clothing">Men's clothing</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="electronics">Electronics</option>
                        </select>
                    </div>
                    <div className="productName commomOne">
                        <label htmlFor="name">Product Name:-</label>
                        <input type="text" id="name" placeholder="Enter Your Product Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="productName commomOne">
                        <label htmlFor="image">Image URL</label>
                        <input type="text" id="name" placeholder="Enter Your Image URL" onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <div className="availableDate commomOne">
                        <label htmlFor="date">Effective Available Date:-</label>
                        <input type="date" id="date" onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div className="inventoryLevel commomOne">
                        <label htmlFor="inventory">Inventory Level:-</label>
                        <input type="number" id="inventory" onChange={(e) => setInventory(e.target.value)} />
                    </div>

                    <div className="shortDescription commomOne">
                        <label htmlFor="shortDes">Short Description:-</label>
                        <input type="text" id="shortDes" placeholder="Short description about your product" onChange={(e) => setShortDesc(e.target.value)} />
                    </div>

                    <div className="longDescription commomOne">
                        <label htmlFor="longDesc">Long Description:-</label>
                        <textarea id="longDesc" cols="30" rows="4" placeholder="Something more about your product....." onChange={(e) => setLongDesc(e.target.value)}></textarea>
                    </div>

                    <div className="perUnitPrice commomOne">
                        <label htmlFor="price">Per Unit Price:-</label>
                        <input type="text" id="price" onChange={(e) => setperUnitPrice(e.target.value)} />
                    </div>


                    <div className="activeFlag commomOne">
                        <label htmlFor="flag">Active Flag:-  </label>
                        <input type="radio" id="y" name="flag" value="Y" onChange={(e) => setFlag(e.target.value)} />
                        <label htmlFor="y">Y</label>
                        <input type="radio" id="n" name="flag" value="N" onChange={(e) => setFlag(e.target.value)} />
                        <label htmlFor="n">N</label>
                    </div>
                    <div className="button commomOne">
                        <button onClick={handleSubmit}><b>Submit</b></button>
                    </div>
                </form>
            </div>

        </div>
    );
}
