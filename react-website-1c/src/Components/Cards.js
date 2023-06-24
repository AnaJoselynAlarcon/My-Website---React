import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Portfolio</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/Manuales de franquicia 1.png"
              text="Created a complete business model for a succesful company"
              label="Business Owner"
              path="https://www.youtube.com/watch?v=jwmevcC-mEQs"
            />
            <CardItem
              src="images/dashboard.png"
              text="Data Extraction and Visualization in Power BI"
              label="Python, Power BI, SQL, Excel"
              path="https://app.powerbi.com/view?r=eyJrIjoiNTViNTYyZjQtMDIxYy00ZTI0LWFlMGEtMGQxNDRmNWYxYTg0IiwidCI6ImY1MmYyMTgzLTlmNjctNGFkMi1iNjU2LTZmNzU0ZmUxOTZjYiIsImMiOjZ9"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/vendor.png"
              text="Vendor Transactions Visualizations"
              label="Data Analysis, Power BI, SQL, Excel, csv"
              path="https://app.powerbi.com/view?r=eyJrIjoiMDNkMmVmN2UtM2IyZS00YzNjLWFiN2ItYzRmZjQ1NThhZmEwIiwidCI6ImY1MmYyMTgzLTlmNjctNGFkMi1iNjU2LTZmNzU0ZmUxOTZjYiIsImMiOjZ9"
              target="_blank"
            />
            <CardItem
              src="images/pizzeria.png"
              text="Pizzeria Data Analysis"
              label="BI Consultant"
              path="https://app.powerbi.com/view?r=eyJrIjoiNTM3MWY4NTktY2Q3YS00MGMyLWJmYjctMTA3MDdlZTRlZTY0IiwidCI6ImY1MmYyMTgzLTlmNjctNGFkMi1iNjU2LTZmNzU0ZmUxOTZjYiIsImMiOjZ9"
              target="_blank"
            />
            <CardItem
              src="images/img-8.jpg"
              text="React Website"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
