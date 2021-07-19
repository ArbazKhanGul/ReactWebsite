import React,{useState} from 'react';

function Contact(){
const [inp, setinp] = useState({email:"",fullName:"",mobile:"",
message:""
});
function inputevent(event){

const name=event.target.name;
const val=event.target.value;
  setinp((prev)=>{
  return ({...prev,
  [name]:val
  })
})
}

function formSubmit(e){
e.preventDefault();
alert("Form submitted")
}
  return(
        <>
            <div className="my-5">
<h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div mb-3"> 
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

                    <form action="" onSubmit={formSubmit}>

                    <div className="mb-3">
  <label ht="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" name="email" onChange={inputevent} value={inp.email}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
              <div className="mb-3">
  <label ht="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" name="fullName" onChange={inputevent} value={inp.fullName} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
</div>
              <div className="mb-3">
  <label ht="exampleFormControlInput1"   className="form-label">Phone</label>
  <input type="phone" name="mobile" onChange={inputevent} className="form-control" value={inp.mobile} id="exampleFormControlInput1" placeholder="mobile Number" />
</div>
<div className="mb-3">
  <label ht="exampleFormControlTextarea1"  className="form-label">Message</label>
  <textarea className="form-control" onChange={inputevent}  name="message" value={inp.message} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact;