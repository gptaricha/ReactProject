import React from "react";

//import Components
import Card from "../molecules/Card";
import Header from "../organisms/Header"

export default function HomePage({information}) {
    const Cards = information.map(item=> {
        return <Card key= {item.id} data={item} />
      });
 return (   
     <div className ="home-page">
        <Header />
        {Cards}
        {/*<Card data ={information[0]}/> */}
    </div>
 );

}