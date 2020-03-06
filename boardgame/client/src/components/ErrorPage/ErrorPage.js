import React from 'react';
import "./ErrorPage.css";
import {Button} from "reactstrap"

const ErrorPage=(props)=> {

    return (
    props.count===4?
    <h1>Sorry, game is full.</h1>
        :
        <><h1>Sorry, game is already in progress</h1> <Button onClick={props.test}> test state</Button> </>
    )

}

export default ErrorPage;