import React from 'react';
import { NavLink } from 'react-router-dom';


function Common(props){
    return(
        <>
           <section id="header" className="d-flex align-items-center my-3" >

           <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
<h1>{props.name} <br /><strong className="brand-name">Thapa Technical</strong></h1>
<h2 className="my-3">We are the team of talented making websites</h2>
<div className="mt-3">
    <NavLink to={props.visit} className="btn btn-primary button">{props.btnname}</NavLink>
</div>

</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
<img src="https://source.unsplash.com/user/erondu/1600x900" className="img-fluid animated" alt="Cannot find image" />
</div></div>
            </div>
      </div>
      </div>     </section>
        </>
    )
}

export default Common;