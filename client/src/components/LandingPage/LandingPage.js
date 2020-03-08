import React from 'react';
import "./LandingPage.css";
import { Button } from 'reactstrap';

const LandingPage=(props)=> {
    return (
        props.count===4 ? <h1>Sorry, game is full.</h1> : 
        // props.play === true ? <><h1>Sorry, game is already in progress</h1> <Button onClick={props.test}> test state</Button>: </>
        
        <>
        <h1>Welcome to The Game of Bootcamp!</h1>
        <p>some introduction text here</p>
        <div id="loginStuff"></div>
        <div id="logged in"></div>
        <Button onClick={props.start} >START GAME!</Button>
        <Button onClick={props.test}> test state</Button>
        </>
    )
}

export default LandingPage;