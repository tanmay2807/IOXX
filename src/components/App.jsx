import React from "react";
import Card from "./Card.jsx"
import Information from "./Information";

function createCard(info){
    return (
        <Card
            id = {info.id}
            key ={info.id}
            img = {info.img} 
            type = {info.type}
            profit = {info.profit}
            cashback = {info.cashback}
            spots = {info.spots}
            button = {info.button}
            includes = {info.includes}
            amount = {info.amount}
            cutText = {info.cutText}
            offer = {info.offer}
            offer2 = {info.offer2}
            status = {info.status}
            buttonColor = {info.buttonColor}
        />
    )
};

function App(){
    return (
        <div className="flex">
            {Information.map(createCard)}
        </div>
    )
};

export default App;
