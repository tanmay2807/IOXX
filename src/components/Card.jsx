import React from "react";

function Card(props){

    function buttonActiveIn(x){
        x.target.style.background= "white";
        x.target.style.color= props.buttonColor;
    };

    function buttonActiveOut(y){
        y.target.style.background= props.buttonColor;
        y.target.style.color= "white";
    }
    return (

    <div id={props.type}>
        <div className="container-3" >
            <div className="card-1" style={{backgroundColor: props.status}}>
                <div className="card-1-1">
                <img className="card-image" src={props.img} alt="" srcset=""/>
                </div>
                <div className="card-1-2">
                <div className="card-1-2-type">{props.type}</div>
                <div className="card-1-2-profit">{props.profit}</div>
                <div className="card-1-2-cashback"><div className="cashBack" style={{display: "inline-block",backgroundColor: "rgb(70, 155, 93)",color: "white",padding: "0rem ,1.5rem, 0rem, 1.5rem" ,height: "3.5rem" ,borderRadius: "1rem"}}>{props.cashback}</div> cash back</div>
                </div>
                <div className="card-1-3">
                <div className="card-1-3-spots"><b>{props.spots}</b> spots &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>283</b> spots left</div>
        
                <button className="card-1-3-button" type="submit" style={{backgroundColor: props.buttonColor, border: "1px solid" + props.buttonColor}}  onMouseEnter={buttonActiveIn} onMouseOut={buttonActiveOut}>{props.button}</button>

                <div className="card-1-3-includes">INCLUDES</div>
                <div className="card-1-3-list">
                    <ul className="list">
                    <li className="list-items item-1"><svg className="svg-tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" ><path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path></svg>{props.includes}</li>
                    <li className="list-items item-2"><svg className="svg-tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" ><path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path></svg>{props.profit} Bonus Rate Checking Account</li>
                    <li className="list-items item-3"><svg className="svg-tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" ><path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path></svg>{props.cashback} Cash back on brands you love</li>
                    <li className="list-items item-4"><svg className="svg-tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" ><path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path></svg>Free Cash Withdrawals</li>
                    <li className="list-items item-5"><svg className="svg-tick" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 13" ><path stroke="#00A86B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 1L6 12 1 7" data-v-5602b450=""></path></svg>Phone & Chat Support</li>
                    </ul>
                </div>
                <div className="card-1-3-info">Fund your account with a minimum opening deposit of <b>{props.amount}</b>. 3 additional free ATM withdrawals per month from out of network ATMs.</div>
                </div>
                <div className="card-1-4" style={{backgroundColor: props.status}}>
            <div className="card-1-4-cut">{props.cutText}</div>
                <div className="card-1-4-offer">{props.offer}<br></br> <div style={{fontSize:"2.5rem",color:"darkgreen",paddingBottom: "2rem"}}><b>{props.offer2}</b></div></div>
                </div>
            </div>
    </div>
</div>
    )
};

export default Card;