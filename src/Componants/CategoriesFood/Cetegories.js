import React from 'react';
import './Cetegories.css'
const Cetegories = (props) => {
    const { strCategory, strCategoryThumb } = props.item;
    return (
        <div>
            <div className="container">
                <div className="cetegories" onClick={()=>props.eventHandle(props.item)}>
                    <div className="col">
                        <div className="card h-100">
                            <img src={strCategoryThumb} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">{strCategory}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cetegories;