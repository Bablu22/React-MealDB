import React, { useEffect, useState } from 'react';
import Cetegories from '../CategoriesFood/Cetegories';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Foods.css'

const getLocalItem = () => {
    let list = localStorage.getItem('cart')
    if (list) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    else {
        return []
    }
}

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [detailFood, setDetailFood] = useState(getLocalItem());
    // const [removeItem, setRemoveItem] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(data => setFoods(data.categories))
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(detailFood))
    }, [detailFood])

    const detailsHandle = (food) => {
        const newFoods = [...detailFood, food]
        setDetailFood(newFoods);
    }
    const removeItme = item => {
        const remove = detailFood.filter(ml => ml.idCategory !== item.idCategory)
        console.log(remove);
        setDetailFood(remove)
    }
    
    return (
        <div>
            <h3 className="text-center py-5 ">All Cetegories</h3>
            <div className="cetegories-container">
                <div className="row row-cols-1 row-cols-md-3 g-2 container ms-5">
                    {
                        foods.map(food => <Cetegories
                            key={food.idCategory}
                            item={food}
                            eventHandle={detailsHandle}
                        >
                        </Cetegories>)


                    }
                </div>
                <div className="food-details mt-0 pt-0">
                    <h3 className="text-center pb-3">Selected Food</h3> <hr />
                    {
                        detailFood.map(food => <FoodDetails
                            key={food.idCategory}
                            food={food}
                            button={removeItme}
                        >
                        </FoodDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;