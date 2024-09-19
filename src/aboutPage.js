export default function(){
    const maindiv=document.createElement('div');
    const div1=document.createElement('div');
    const heading=document.createElement('h1');
    heading.textContent="About Us";
    const p1=document.createElement('p');
    p1.textContent="Welcome to The Urban Kitchen, where we serve delicious and authentic dishes prepared by the finest chefs. Located in the heart of Bangalore, our restaurant is dedicated to providing a unique dining experience that blends traditional recipes with modern culinary techniques.";
    const p2=document.createElement('p');
    p2.textContent="At The Urban Kitchen, we believe in using only the freshest ingredients, sourced locally whenever possible, to craft each meal with care. Our menu offers a wide variety of options, from tender chicken döner pitta to flavorful vegetarian dishes, ensuring there's something for everyone.";
    const p3=document.createElement('p');
    p3.textContent="With a cozy atmosphere and a commitment to excellent service, we strive to make every visit memorable. Whether you're here for a casual lunch, a family dinner, or a special occasion, The Urban Kitchen is the perfect spot to enjoy great food with even better company.\nCome in and taste the difference!"
    div1.appendChild(heading);
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(p3);
    const div2=document.createElement('div');
    const heading2=document.createElement('h1');
    heading2.textContent="Our Story";
    const p4=document.createElement('p');
    p4.textContent="Founded in 1990, The Urban Kitchen was born from a passion for delicious food and a desire to bring authentic flavors to the community. What started as a small venture has grown into a beloved local spot, thanks to the support of our loyal customers and the dedication of our talented team.";
    div2.appendChild(heading2);
    div2.appendChild(p4);
    const div3=document.createElement('div');
    const heading3=document.createElement('h1');
    heading3.textContent="Our Promise";
    const p5=document.createElement('p');
    p5.textContent="At The Urban Kitchen, quality is our top priority. From the moment you step in, we promise fresh, flavorful dishes made with love and served with a smile. We look forward to welcoming you!"
    div3.appendChild(heading3);
    div3.appendChild(p5);
    maindiv.appendChild(div1);
    maindiv.appendChild(div2);
    maindiv.appendChild(div3);
    maindiv.classList.add('about');
    maindiv.classList.add('main','hidden');
    return maindiv;
}