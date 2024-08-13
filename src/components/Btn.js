import React from 'react';

const Btn = (props) => {
  return (
    <button className="w-12 sm:w-16 rounded-full border-2 border-slate-500" onClick={props.onPress}>
      <img src={`/img/${props.name}-btn.png`} alt={props.name} />
    </button>
  );
};

export default Btn;
