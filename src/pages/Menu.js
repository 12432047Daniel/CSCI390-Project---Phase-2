import react from 'react';
import '../style/menu.css';
import Cards from '../components/Cards';
const Menu = () => {
    return (
        <div className='menu'>
            <h1>Menu</h1>
            <p>This is the menu page.</p>
            <h1>Beverages</h1>
            <div className='beverages'>
                <Cards title="Black Coffee" text="A rich and smooth coffee made from freshly brewed beans, served without milk for a bold flavor." img="https://weaverscoffee.com/cdn/shop/articles/1_957x.png?v=1568421338"></Cards>
                <Cards title="Latte" text="A creamy espresso drink topped with steamed milk and a light layer of foam." img="https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg"></Cards>
                <Cards title="Cappuccino" text="A balanced blend of espresso, steamed milk, and frothy milk foam." img="https://braziliankitchenabroad.com/wp-content/uploads/2023/11/Dulce-de-Leche-Latte-15.jpg"></Cards>
                <Cards title="Mocha" text="A delicious chocolate-flavored coffee drink made with espresso, steamed milk, and chocolate syrup." img="https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?"></Cards>
            </div>
            <h1>Desserts</h1>
            <div className='desserts'>
                <Cards title="Chocolate Cake" text="Soft chocolate cake with a rich and sweet flavor." img="https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg"></Cards>
                <Cards title="Red Velvet Cake" text="A smooth cake with cream cheese frosting and a soft texture." img="https://www.simplytrinicooking.com/wp-content/uploads/red-velvet-cake.jpg"></Cards>
                <Cards title="Donut" text="Sweet fried pastry with sugar or chocolate topping." img="https://thebakermama.com/wp-content/uploads/2016/06/Baked-Cake-Donuts.jpeg"></Cards>
                <Cards title="Cookies" text="Crunchy cookies with chocolate chips." img="https://www.shugarysweets.com/wp-content/uploads/2020/05/chocolate-chip-cookies-recipe.jpg"></Cards>
            </div>
            <h1>Food</h1>
            <div className='food'>
                <Cards title="Chicken Sandwich" text="Grilled chicken with lettuce, tomato, and sauce." img="https://thumbs.dreamstime.com/b/grilled-chicken-arugula-sandwich-close-up-view-grilled-chicken-arugula-sandwich-close-up-view-lettuce-herbs-easy-grill-335824305.jpg"></Cards>
                <Cards title="Turkey Sandwich" text="Turkey slices with cheese and fresh vegetables." img="https://www.jennieo.com/wp-content/uploads/2019/11/image-recipe_cracked-pepper-turkey-sandwich.jpg"></Cards>
                <Cards title="French Fries" text="Crispy fried potatoes served with ketchup." img="https://www.allrecipes.com/thmb/8_B6OD1w6h1V0zPi8KAGzD41Kzs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50223-homemade-crispy-seasoned-french-fries-VAT-Beauty-4x3-789ecb2eaed34d6e879b9a93dd56a50a.jpg"></Cards>
                <Cards title="Pepperoni Pizza" text="Classic pizza topped with pepperoni slices and melted cheese." img="https://everdure.com/cdn/shop/articles/20251209014056-pepperoni-20pizza_002-20copy_28a32c8a-603d-4739-bd36-00622caf95f1.jpg?v=1765251911"></Cards>
            </div>
        </div>

    )
}

export default Menu;