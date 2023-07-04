import * as React from 'react';
import {DishCard, HeaderTitle} from "Frontend/common/index.js";

export function SpecialDishes() {
    return (
        <div className="py-[2.361vw]">
            <HeaderTitle title="Our Special dishes" />
            <div className="grid grid-cols-3 gap-[20px]">
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
                <DishCard id={1} img="https://i.imgur.com/OJ6nb6i.png" title="Special Dish" description="<p>This text should me a very long description that shouldn’t fit here so ...  </p>" rating={5} price={47} />
            </div>
        </div>
    );
};