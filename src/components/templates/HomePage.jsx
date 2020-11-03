import React from "react";
//import Components
import Card from "../molecules/Card";
import Header from "../organisms/Header"

export default function HomePage({information}) {
    const Cards = information.map(item=> {
        return <Card key= {item.id} data={item} />
      });
 return (   
     <div className ="HomePage">
        <Header />
        <section className="container">
            <h2>Recommended videos</h2>
            <div className="grid">
                {Cards}
            </div>
            
            {/*<Card data ={information[0]}/> */}
        </section>
    </div>
 );

}