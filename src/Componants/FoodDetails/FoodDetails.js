import React from 'react';
import './FoodDetails.css'


const FoodDetails = (props) => {
    
    const { strCategory, strCategoryThumb } = props.food;
    return (
        <div>
            <div className="card food-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={strCategoryThumb}className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{strCategory}</h5>
                            <button onClick={()=>props.button(props.food)} className="btn btn-info">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;