import React from 'react';
import Card from './Card';
import Data from "./Sdata";
function Service(){
    return(
        <>
           <div className="my-5">

               <h1 className="text-center">Our Services</h1>
           </div>
           <div className="container-fluid mb-3">
          <div className="row">
            <div className="col-10 mx-auto">
<div className="row gy-5">
{Data.map((value,index)=>{
return  (<Card title={value.title} image={value.imgsrc} key={index}></Card>)
})}

</div>

</div></div></div>
        </>
    )
}

export default Service;