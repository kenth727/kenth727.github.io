import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState("All");
  const [fade, setFade] = useState(false); // State to control fade animation

  const filterItem = (categoryItem) => {
    setFade(true); // Start fade-out animation
    setTimeout(() => {
      // Apply filtering after fade-out animation completes
      const updatedItems =
        categoryItem === "All"
          ? Menu
          : Menu.filter((curElem) => curElem.category === categoryItem);

      setItems(updatedItems);
      setActiveFilter(categoryItem); // Set the clicked filter as active
      setFade(false); // Start fade-in animation
    }, 300); // Match this duration with your fade-out animation in CSS
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span
          className={`work__item ${activeFilter === "All" ? "active" : "inactive"}`}
          onClick={() => {
            filterItem("All");
          }}
        >
          All
        </span>
        <span
          className={`work__item ${activeFilter === "AI & Machine Learning" ? "active" : "inactive"}`}
          onClick={() => filterItem("AI & Machine Learning")}
        >
          AI & Machine Learning
        </span>
        <span
          className={`work__item ${activeFilter === "Mobile & Front-End Development" ? "active" : "inactive"}`}
          onClick={() => filterItem("Mobile & Front-End Development")}
        >
          Mobile & Front-End Development
        </span>
        <span
          className={`work__item ${activeFilter === "Algorithms & Optimization" ? "active" : "inactive"}`}
          onClick={() => filterItem("Algorithms & Optimization")}
        >
          Algorithms & Optimization
        </span>
      </div>

      <div className={`work__container grid ${fade ? "fade-out" : "fade-in"}`}>
        {items.map((elem) => {
          const{id, image, title, category, href, desc} = elem;

          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <p class="work__desc">{desc}</p>
              <a href={href} className="work__button" rel="noopener noreferrer" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>

  )
}

export default Portfolio