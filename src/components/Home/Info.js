import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="Our Story"/>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                 <p className="lead text-muted mb-5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem nihil, fugiat maxime incidunt et rerum atque consectetur reiciendis. Magnam autem facilis ad maiores omnis ratione molestias quae culpa incidunt laudantium laborum rem praesentium officia aut, neque tenetur nam debitis nemo a doloribus ipsam! Aperiam quasi inventore earum blanditiis corporis excepturi omnis est a esse sint dolores ea fuga totam ut voluptas, voluptates reiciendis culpa neque nam! Magni perspiciatis laboriosam sunt reiciendis hic vitae earum error repudiandae, numquam, tenetur nam!
                 </p>
                 <Link to="/about">
                 <button className="btn text-uppercase btn-about">about page</button>
                 </Link>
                </div>
            </div>
            </div>
        </section>
    )
}
