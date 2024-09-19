import burger from "./images/burger.jpg";
import nuggets from "./images/nuggets.jpg";
import fries from "./images/fries.jpg";
import hotdog from "./images/hotdog.jpg";
import sandwich from "./images/sandwich.jpeg";
import vegburger from "./images/veg-burger.jpg";
import doner from "./images/doner.jpg";
import milkshake from "./images/milkshake.jpg";
import onionrings from "./images/onion-rings.jpg";
import mozarella from "./images/mozarella.jpg";

let menuitems=["Fried Chicken Burger","Chicken Nuggets","French Fries","Hot Dog","Grilled Chicken Sandwich","Veggie Burger","Chicken Doner Pitta","Milkshake",
    "Onion Rings","Mozzarella Sticks"];
let menudesc=[
    "A crispy, golden-fried chicken fillet topped with fresh lettuce, tomato, and mayo, all served on a soft toasted bun for the perfect crunch and flavor in every bite.",
    "Crispy, golden-brown bite-sized chicken pieces, perfect for dipping in your favorite sauce.",
    "Freshly cut and fried to golden perfection, our crispy fries are the perfect side to any meal.",
    "A grilled chicken hot dog served in a soft bun with your choice of toppings like ketchup, mustard, and relish.",
    "Tender grilled chicken breast topped with fresh lettuce, tomato, and mayo, served on a soft bun.",
    "A hearty plant-based patty with lettuce, tomato, and onions, served with a side of crisp fries.",
    "Tender, seasoned rotisserie chicken in warm pitta bread with fresh salad and your choice of sauces.",
    "Creamy, rich milkshake blended with your choice of classic flavors: chocolate, vanilla, or strawberry.",
    "Thick-cut onions battered and fried to crispy perfection, served with a side of dipping sauce.",
    "Golden-fried mozzarella cheese sticks, crunchy on the outside, gooey on the inside, served with marinara sauce for dipping."
];

let menuimgs=[burger,nuggets,fries,hotdog,sandwich,vegburger,doner,milkshake,onionrings,mozarella];

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
        const image=document.createElement('img')
        image.src=menuimgs[index];
        itemdiv.appendChild(itemname);
        itemdiv.appendChild(image);
        itemdiv.appendChild(itemdesc);
        itemdiv.style.animationDelay = `${0.2 + 0.1 * index}s`;
        items.appendChild(itemdiv);
    })
    maindiv.appendChild(items);
    return maindiv
}