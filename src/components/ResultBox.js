import React from 'react';

const ResultBox = (props) => {
  return (
    <div className={`my-result border-4 ${props.color} flex flex-col gap-4 px-2 py-4`}>
      <p className="result-title text-3xl text-center">{props.title}</p>
      <img src={`/img/${props.name}-big.png`} alt={props.name} />
      <p className="result text-2xl text-center">{props.result}</p>
    </div>
  );
};

export default ResultBox;
