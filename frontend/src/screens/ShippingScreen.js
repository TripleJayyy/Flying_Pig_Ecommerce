import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { saveShippingAddress } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  let navigate = useNavigate()

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  //const [country, setCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    dispatch(saveShippingAddress({ address, city, postalCode, /*country*/ }))
    navigate('/payment')
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Delivery</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="City/Town"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label></Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Postal Code"
            value={postalCode ? postalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group> */}

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
