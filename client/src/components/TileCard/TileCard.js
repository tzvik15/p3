import React, { useContext } from "react";
import "./card.css";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import CardContext from "../../utils/CardContext"

const TileCard = (props) => {

  const { title, description, cost } = useContext(CardContext);

  return (
    <div>
      <Card className="tileCard">
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{title}</CardTitle>
          {/* <CardSubtitle>
            Do you want to learn {title}? This will cost {cost} hours
          </CardSubtitle> */}
          <CardText>
            {description}
          </CardText>
          <Button onClick={props.learn}>Learn </Button>
          <Button onClick={props.noLearn}>Do NOT learn {title}</Button>
          <Button onClick={props.pass}>PLAYED</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TileCard;
