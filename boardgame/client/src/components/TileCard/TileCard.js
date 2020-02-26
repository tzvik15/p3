import React from 'react';
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
} from 'reactstrap';

const TileCard = (props) => {
   return (
      <div>
         <Card className="tileCard">
            {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
         <CardBody>
            <CardTitle>HTML</CardTitle>
            <CardSubtitle>Do you want to learn HTML? This will cost X hours</CardSubtitle>
            <CardText>Learning HTML is very important! If you spend the time to learn it now it may save you some time in the future!</CardText>
            <Button>Learn HTML</Button>
            <Button>Do NOT learn HTML</Button>
         </CardBody>
         </Card>
      </div>
   );
};

export default TileCard;