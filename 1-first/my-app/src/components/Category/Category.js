import React from "react";
import './Category.css'
import { Link } from "wouter";

export default function Category({ name, options = [] }) {
    return (
      <section>
        <h3>{name}</h3>
        <ul className="trending__list">
        {
            options.map((singleOption, index) =>{
                return(
                    <li key={singleOption.id}>
                        <Link to={`/search/:${singleOption.title}`}>{singleOption.title}</Link>
                    </li>
                )
            })    
        }
        </ul>
      </section>
    );
  }