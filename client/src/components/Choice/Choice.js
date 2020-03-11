import React from 'react';
import {
   Card, CardText, CardBody,
   Button
} from 'reactstrap';

const Choice = (props) => {
   return (
      <div>
         <Card className="choiceCard">
         <CardBody>
            {/* <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>How many spaces would you like to move?</CardText>
            <Button className="moveBtn" onClick={props.moveOne}>Move one space</Button>
            <Button className="moveBtn" onClick={props.moveTwo}>Move two spaces</Button>
            <Button className="moveBtn" onClick={props.moveThree}>Move three spaces</Button>
         </CardBody>
         </Card>
      </div>
   );
};

export default Choice;