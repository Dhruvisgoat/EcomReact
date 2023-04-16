import React, { useState } from "react";
import './checkout.css';
const CheckoutPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        id="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        value={cvv}
                        onChange={(event) => setCvv(event.target.value)}
                    />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
}

export default CheckoutPage;
