import React from "react";
import { useParams } from "react-router-dom";

const EachCard = () => {
  const { id } = useParams();

  return (
    <>
      <h1>PC Component {id} </h1>
    </>
  );
};

export default EachCard;
