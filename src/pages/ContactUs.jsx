import React from "react";
import { cardHeader as Header } from "../components/Card";
import { Form, Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <main className="flex-grow-1 p-4" id="main-content">
      <div className="pt-5 mt-5">
        <h1>
          <Header textH="Contact Us" />
        </h1>
        <p className="lead">
          We're here to help! Reach out to us with any questions, feedback, or
          support needs. Our team is ready to assist you.
        </p>
        <hr />
        <main className="container mt-2 p-0">
          <div className="row justify-content-evenly m-0 mt-4">
            <h4>Get in Touch</h4>
            <p className="text-start">
              We’d love to hear from you! Whether you have a question about our
              services, need assistance, or just want to say hello, feel free to
              get in touch. Here are all the ways you can reach us:
            </p>

            <div>
              <ul>
                <li>
                  <p className="text-start m-0">Phone: +8801910427487</p>
                  <p className="text-muted text-start">
                    Call us anytime during our business hours, and our team will
                    be happy to help.
                  </p>
                </li>
                <li>
                  <p className="text-start m-0">
                    Email: priankadas55555@gmail.com
                  </p>
                  <p className="text-muted text-start">
                    Send us an email, and we’ll get back to you as soon as
                    possible.
                  </p>
                </li>
                <li>
                  <p className="text-start m-0">
                    Address: Ghosherchar, Gopalgonj - 8100.
                  </p>
                  <p className="text-muted text-start">
                    Visit us at our location during office hours, or send us a
                    letter.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mt-5">Contact Form</h4>
              <p className="text-muted">
                Prefer to reach out online? Fill out our contact form below, and
                we’ll respond to you shortly.
              </p>
              <div className="d-flex justify-content-center">
                <Form className="w-50">
                  <Form.Group className="mb-3 text-start" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter yore name" />
                  </Form.Group>

                  <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-3 text-start"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Your Question</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>

                  {/* <Form.Group
                    className="mb-3 text-start"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
