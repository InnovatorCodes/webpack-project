export default function(){
    const maindiv=document.createElement('div');
    maindiv.classList.add('contact');
    const div1=document.createElement('div');
    const heading=document.createElement('h1');
    heading.textContent="Contact Us";
    const p1=document.createElement('p');
    p1.textContent="We’d love to hear from you! Whether you have questions, feedback, or special requests, feel free to reach out. Our team is here to help!";
    const div2=document.createElement('h2');
    const location=document.createElement('h2');
    location.textContent="Location";
    const address=document.createElement('p');
    address.textContent="The Urban Kitchen\n1234 Culinary Lane\nKoramangala, Bangalore 560034\nIndia";
    div2.appendChild(location);
    div2.appendChild(address);
    const div3=document.createElement('div');
    const phone=document.createElement('h2');
    phone.textContent="Phone";
    const number=document.createElement('p');
    number.textContent="📞 +91 98765 43210";
    div3.appendChild(phone);
    div3.appendChild(number);
    const div4=document.createElement('div');
    const email=document.createElement('h2');
    email.textContent='Email';
    const emailid=document.createElement('p');
    emailid.textContent="✉️ contact@theurbankitchen.in";
    div4.appendChild(email);
    div4.appendChild(emailid);
    const div5=document.createElement('div');
    const openingtime=document.createElement('h2');
    openingtime.textContent="Opening Hours";
    const hours=document.createElement('ul');
    const li1=document.createElement('li');
    li1.textContent="Monday to Friday: 11:00 AM – 10:00 PM";
    const li2=document.createElement('li');
    li2.textContent="Saturday: 12:00 PM – 11:00 PM";
    const li3=document.createElement('li');
    li3.textContent="Sunday: 12:00 PM – 9:00 PM";
    hours.append(li1,li2,li3);
    div5.appendChild(openingtime);
    div5.appendChild(hours);
    const div6=document.createElement('div');
    const follow=document.createElement('h2');
    follow.textContent="Follow Us";
    const desc=document.createElement('p');
    desc.textContent="Stay connected through our social media for updates, special offers, and more!";
    const links=document.createElement('ul');
    const link1=document.createElement('li');
    link1.textContent="Facebook: facebook.com/theurbankitchenBLR";
    const link2=document.createElement('li');
    link2.textContent="Instagram: instagram.com/theurbankitchen";
    const link3=document.createElement('li');
    link3.textContent="Twitter: twitter.com/urbankitchenBLR";
    links.append(link1,link2,link3);
    div6.append(follow,desc,links);
    maindiv.append(div1,div2,div3,div4,div5,div6);
    return maindiv;
}