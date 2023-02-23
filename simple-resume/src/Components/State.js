import React, { useState } from "react";

const Example = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      {isVisible && <p>This is some visible content!</p>}
    </div>
  );
};

export default Example;