let menuitems=["Cheeseburger","Chicken Nuggets","French Fries","Hot Dog","Grilled Chicken Sandwich","Veggie Burger","Milkshake (Chocolate/Vanilla/Strawberry)",
    "Onion Rings","Fried Chicken Burger","Mozzarella Sticks"];
let menudesc=[
    "A juicy chicken patty topped with melted cheese, lettuce, tomato, and your choice of condiments, all sandwiched in a toasted bun.",
    "Crispy, golden-brown bite-sized chicken pieces, perfect for dipping in your favorite sauce.",
    "Freshly cut and fried to golden perfection, our crispy fries are the perfect side to any meal.",
    "A grilled chicken hot dog served in a soft bun with your choice of toppings like ketchup, mustard, and relish.",
    "Tender grilled chicken breast topped with fresh lettuce, tomato, and mayo, served on a soft bun.",
    "A hearty plant-based patty with lettuce, tomato, and onions, served with a side of crisp fries.",
    "Creamy, rich milkshake blended with your choice of classic flavors: chocolate, vanilla, or strawberry.",
    "Thick-cut onions battered and fried to crispy perfection, served with a side of dipping sauce.",
    "A crispy, golden-fried chicken fillet topped with fresh lettuce, tomato, and mayo, all served on a soft toasted bun for the perfect crunch and flavor in every bite.",
    "Golden-fried mozzarella cheese sticks, crunchy on the outside, gooey on the inside, served with marinara sauce for dipping."
];

export default function(){
    const maindiv=document.createElement('div');
    maindiv.classList.add('menu');
    const heading=document.createElement('h1');
    heading.textContent='MENU';
    maindiv.appendChild(heading);
    const items=document.createElement('div');
    items.classList.add('items');
    menuitems.forEach((menuitem,index)=>{
        const itemdiv=document.createElement('div');
        itemdiv.classList.add('item');
        const itemname=document.createElement('h3');
        itemname.textContent=menuitem;
        const itemdesc=document.createElement('p');
        itemdesc.textContent=menudesc[index];
        itemdiv.appendChild(itemname);
        itemdiv.appendChild(itemdesc);
        items.appendChild(itemdiv);
    })
    maindiv.appendChild(items);
    return maindiv
}