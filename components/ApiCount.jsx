import React from "react";

const ApiCount = (props) => {
    const { apiCallCount } = props;
  return (
    <div className="flex items-center justify-center h-full">
      <h3>{`API Call Count :  ${apiCallCount}`}</h3>
    </div>
  );
};

export default ApiCount;
