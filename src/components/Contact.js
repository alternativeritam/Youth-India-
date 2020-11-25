import React, {useState} from 'react'
import './Contact.css';

const Contact = () => {

    const [data,setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) =>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullName}`);
    };






    return (
        <>
        <div>
        <h1 className="teampage-heading">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto contact_form">
                <form onSubmit={formSubmit}>

                <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    name="fullname"
    value={data.fullname}
    onChange={InputEvent}
    placeholder="Enter your name" aria-describedby="emailHelp"/>
  </div>

                <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
    name="email"
    value={data.email}
    onChange={InputEvent}
    placeholder="example@mail.com" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="exampleInputPassword1" 
    name="phone"
    value={data.phone}
    onChange={InputEvent}
    placeholder="Mobile Number"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">
        Message
    </label>
    <textarea
    class="form-control"
    id="exampleFormControltextarea1"
    rows="3"
    name="msg"
    value={data.msg}
    onChange={InputEvent}
    >
    </textarea>
  </div>
  <div class="col-12">
  <a href="something" class="button2">Submit</a>
  </div>

                </form>
                </div>
            </div>
        </div>

        </>
    );
};

export default Contact;
