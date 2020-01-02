import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="Location"/>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                 <p className="lead text-muted mb-5">
                   No 4 Law Xtension, Unilag Estate, Magodo Phase 1.
                 </p>
                 <Link to="/location">
                 <button className="btn text-uppercase btn-about">location</button>
                 </Link>
                </div>
            </div>
            </div>
        </section>
    )
}
