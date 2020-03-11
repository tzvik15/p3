<<<<<<< HEAD
import React from 'react';
import './card.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const TileCard = (props) => {
	return (
		<div>
			<Card className="tileCard">
				{/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
				<CardBody>
					<CardTitle>{props.name}</CardTitle>
					<CardSubtitle>Do you want to learn {props.name}? This will cost X hours</CardSubtitle>
					<CardText>
						Learning HTML is very important! If you spend the time to learn it now it may save you some time
						in the future!
					</CardText>
					<Button onClick={props.learn}>Learn {props.name}</Button>
					<Button onClick={props.noLearn}>Do NOT learn {props.name}</Button>
				</CardBody>
			</Card>
		</div>
	);
=======
import React, { useContext } from "react";
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
          <CardSubtitle>
            Do you want to learn {title}? This will cost {cost} hours
          </CardSubtitle>
          <CardText>
            {description}
          </CardText>
          <Button onClick={props.learn}>Learn </Button>
          <Button onClick={props.noLearn}>Do NOT learn {title}</Button>
        </CardBody>
      </Card>
    </div>
  );
>>>>>>> 7f13e56a241214ce4b0452f17bee2a7385d124f7
};

export default TileCard;
