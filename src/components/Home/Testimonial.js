import React from 'react'
import user1 from '../../images/user1.png'
import user2 from '../../images/user2.png'
import Title from "../Globals/Title";

export default function Testimonial() {
    return (
         <div className="gray-container">
    <div className="container" style={{textAlign:"center", padding:'.8em 1.2em'}}>
      <Title title="Reviews"/>
        <ul style={{listStyle: 'none', margin: 0, padding: 0,}}>
            <li>
            <figure>
                <img src={user1} alt="user 1"/>
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex consequatur perferendis dignissimos, omnis dolor.</blockquote>
                <figcaption>- Yetunde Bakare</figcaption>
            </figure>
            </li>

            <li>
            <figure>
                <img src={user2} alt="user 2"/>
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex consequatur perferendis dignissimos, omnis dolor.</blockquote>
                <figcaption>- Femi Adebayo</figcaption>
            </figure>
            </li>
        </ul> 
    </div>
    </div>
    )
}
