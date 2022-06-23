import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderFrame from "../assets/header-frame.png";
const Contact = () => {
  const hide = "formNone";
  const show = "formDisplay";

  const [active, activate] = useState(false);
  const [display, setClass] = useState(hide);

  const [userFormData, setUserFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      console.log(e);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      name: "",
      message: "",
    });
  };

  function renderMessageForm(e) {
    e.preventDefault();
    if (active) {
      setClass(hide);
      activate(false);
    } else {
      setClass(show);
      activate(true);
    }
  }

  return (
    <div id="contactBox">
      <>
        <section className="details">
          <img
            alt="Wreath of pink flowers along the border of the header"
            src={HeaderFrame}
          />
          <h2>E-Mail</h2>
          <p>
            <a href="mailto:tricia@carabellaaesthetics.com">
              tricia@carabellaaesthetics.com
            </a>
          </p>
        </section>

        <section className="details">
          <img
            alt="Wreath of pink flowers along the border of the header"
            src={HeaderFrame}
          />
          <h2>Phone</h2>
          <p>
            <a href="/">817-905-6050</a>
          </p>
        </section>

        <section className="buttonBox">
          {active === true ? (
            <>
              <Form>
                <button
                  id="exit"
                  onClick={() => {
                    activate(false);
                  }}
                >
                  X
                </button>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={userFormData.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={userFormData.name}
                    onChange={handleInputChange}
                    type="name"
                    name="name"
                    placeholder="Your name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    value={userFormData.message}
                    onChange={handleInputChange}
                    as="textarea"
                    name="message"
                    size="sm"
                    type="message"
                    placeholder="Your message"
                  />
                </Form.Group>
                <Button
                  onSubmit={(e) => {
                    handleFormSubmit(e);
                    console.log(e.target);
                  }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </>
          ) : (
            <Link
              id="compose"
              style={{ textDecoration: "none" }}
              to="compose"
              onClick={(e) => {
                renderMessageForm(e);
              }}
            >
              <em>COMPOSE MESSAGE</em>
            </Link>
          )}
        </section>
      </>
    </div>
  );
};

export default Contact;
