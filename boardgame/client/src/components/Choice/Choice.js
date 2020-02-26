import React from 'react';
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Choice = (props) => {
   return (
      <div>
         <Card className="choiceCard">
         <CardBody>
            {/* <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>How many spaces would you like to move?</CardText>
            <Button className="moveBtn">Move one space</Button>
            <Button className="moveBtn">Move two spaces</Button>
            <Button className="moveBtn">Move three spaces</Button>
         </CardBody>
         </Card>
      </div>
   );
};

export default Choice;