import React from 'react';

const LoadCountrie = (props) => {

    const {flags, name, region} = props.country;




    return (
        <div >


<div className="card p-5 bg-base-100 h-96 shadow-xl">
  <figure><img src={flags.png} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name.common}
      <div className="badge badge-secondary">{region}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>

    );
};

export default LoadCountrie;