import React from "react";

const CardContext = React.createContext({
   title: "",
   description: "",
   cost: 0
});

export default CardContext;