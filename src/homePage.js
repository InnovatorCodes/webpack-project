export default function(){
    const maindiv=document.createElement('div');
    maindiv.classList.add('home');
    const headline=document.createElement('div');
    headline.classList.add('headline')
    const heading=document.createElement('h1');
    heading.textContent='Welcome to The Urban Kitchen';
    headline.appendChild(heading);
    const description= document.createElement('div');
    const para=document.createElement('p');
    para.textContent=`At The Urban Kitchen, we pride ourselves on offering the finest dining experience with a touch of elegance and a lot of flavor. Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you craving more. Whether you're here for a casual meal or a special occasion, we ensure that each visit is memorable and satisfying. Come join us and indulge in a delightful culinary journey!`;
    description.appendChild(para);
    description.classList.add('description');
    maindiv.appendChild(headline);
    maindiv.appendChild(description);
    return maindiv
}