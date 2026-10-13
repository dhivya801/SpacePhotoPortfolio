/*import React, { useState } from 'react';

export default function ShoppingCartApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [form, setForm] = useState({ name: '', price: '' });
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Headphones', price: 899, quantity: 1 },
    { id: 2, name: 'Mechanical Keyboard', price: 1200, quantity: 1 },
    { id: 3, name: 'Gaming Mouse', price: 450, quantity: 1 },
  ]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, productId: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return alert('Please fill in all fields');

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: parseFloat(form.price),
      quantity: 1,
    };

    setProducts((prev) => [...prev, newProduct]);
    setForm({ name: '', price: '' });
  };

  const updateQuantity = (id, delta) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };

  const triggerRemoveModal = (id) => {
    setModal({ isOpen: true, productId: id });
  };

  const confirmRemove = () => {
    setProducts((prev) => prev.filter((item) => item.id !== modal.productId));
    setModal({ isOpen: false, productId: null });
  };

  const cheapProducts = products.filter((product) => product.price < 1000);

  const themeStyles = {
    backgroundColor: isDarkMode ? '#1e1e24' : '#c6dee4',
    color: isDarkMode ? '#f8f9fa' : '#212529',
    minHeight: '100vh',
    padding: '2rem 1rem',
    fontFamily: 'system-ui, sans-serif',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyles = {
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center',
  };

  return (
    <div style={themeStyles}>
      <div style={containerStyles}>
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <h1>🛒 Simple Shopping Cart</h1>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            style={{ padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '4px' }}
          >
            Toggle to {isDarkMode ? '☀️ Light' : '🌙 Dark'} Mode
          </button>
        </header>

        <div style={{ border: '1px solid #ccc', borderRadius: '4px', marginBottom: '2rem', overflow: 'hidden' }}>
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            style={{ width: '100%', padding: '1rem', textAlign: 'center', background: isDarkMode ? '#333' : '#eee', color: 'inherit', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            {isAccordionOpen ? '▼' : '►'} Shopping Rules
          </button>
          {isAccordionOpen && (
            <div style={{ padding: '1rem', background: isDarkMode ? '#2b2b36' : '#fff', textAlign: 'left' }}>
              <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                <li>Only items priced under ₹1,000 will be displayed in the live cart catalog view.</li>
                <li>Minimum quantity for any selected item is 1.</li>
                <li>Removing an item requires direct confirmation via a secure popup modal.</li>
              </ul>
            </div>
          )}
        </div>

        <form onSubmit={handleAddProduct} style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '100%' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Product Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '80%', boxSizing: 'border-box', textAlign: 'center' }}
              placeholder="e.g., Wireless Mouse"
            />
          </div>
          <div style={{ width: '100%' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Price (₹):</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleInputChange}
              style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '80%', boxSizing: 'border-box', textAlign: 'center' }}
              placeholder="e.g., 500"
            />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '50%' }}>
            Add Product
          </button>
        </form>

        <h2>Cart Items (Filtered Under ₹1000)</h2>
        {cheapProducts.length === 0 ? (
          <p>No products under ₹1000 to display.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cheapProducts.map((product) => (
              <div 
                key={product.id} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '4px', background: isDarkMode ? '#2b2b36' : '#fff' }}
              >
                <div>
                  <strong>{product.name}</strong> - ₹{product.price}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button onClick={() => updateQuantity(product.id, -1)} style={{ padding: '0.25rem 0.5rem' }}>-</button>
                  <span>Qty: {product.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, 1)} style={{ padding: '0.25rem 0.5rem' }}>+</button>
                  
                  <button 
                    onClick={() => triggerRemoveModal(product.id)} 
                    style={{ padding: '0.25rem 0.5rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {modal.isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: isDarkMode ? '#1e1e24' : '#fff', color: 'inherit', padding: '2rem', borderRadius: '8px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '400px', width: '90%' }}>
            <h3>Confirm Action</h3>
            <p>Are you sure you want to remove this product from your shopping cart?</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <button onClick={confirmRemove} style={{ padding: '0.5rem 1rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Yes, Delete
              </button>
              <button onClick={() => setModal({ isOpen: false, productId: null })} style={{ padding: '0.5rem 1rem', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
*/
/*import React from 'react'
import shoe from './elite.jpeg'
import './Prod.css'


const Product = ({ productObj }) => {


    return (
        <div style={{ display: "flex" }}>
            {productObj.map((item) => {
                return (
                    <>
                        <div className="containerCard">
                            <img src={shoe} className="imageShoe" />
                            <h3 className="headingShoe">{item.name}</h3>
                            <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
                                <strike className="strikeShoe">${item.strikePrice}</strike></div>
                            <button className="buttonShoe">  BUY NOW</button>

                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Product */   


import React from 'react';
import './Prod.css';

const Product = ({ productObj = [] }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {productObj.map((item, index) => (
        <div className="containerCard" key={index}>
          <img
            src={item.image}
            alt={item.name}
            className="imageShoe"
          />

          <h3 className="headingShoe">
            {item.name}
          </h3>

          <div className="priceContainerShoe">
            <h4 className="priceShoe">
              ₹{item.price}
            </h4>

            <strike className="strikeShoe">
              ₹{item.strikePrice}
            </strike>
          </div>

          <button
            type="button"
            className="buttonShoe"
            onClick={() => alert(`${item.name} selected!`)}
          >
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;

