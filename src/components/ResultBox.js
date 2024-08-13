import React from 'react';

const ResultBox = (props) => {
  return (
    <div className="my-result border-4 border-red-500 flex flex-col gap-4 p-2">
      <p className="result-title text-2xl text-center">{props.title}</p>
      <img src={`/img/${props.name}-big.png`} alt={props.name} />
      <p className="result text-3xl text-center">Win</p>
    </div>
  );
};

export default ResultBox;
