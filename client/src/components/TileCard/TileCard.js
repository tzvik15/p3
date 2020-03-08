import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const TileCard = props => {


  return (
    <div>
      <Card className="tileCard">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>
            Do you want to learn {props.name}? This will cost X hours
          </CardSubtitle>
          <CardText>
            Learning HTML is very important! If you spend the time to learn it
            now it may save you some time in the future!
          </CardText>
          <Button onClick={props.learn}>Learn {props.name}</Button>
          <Button onClick={props.noLearn}>Do NOT learn {props.name}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TileCard;
