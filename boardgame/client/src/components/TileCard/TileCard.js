import React from 'react';
import {
   Card, CardText, CardBody,
   CardTitle, CardSubtitle, 
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
         </CardBody>
         </Card>
      </div>
   );
};

export default TileCard;