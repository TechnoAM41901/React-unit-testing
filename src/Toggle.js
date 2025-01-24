import React, { useState } from 'react';

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <p>Content is visible!</p>}
    </div>
  );
};

export default Toggle;