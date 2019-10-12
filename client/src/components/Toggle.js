import React from "react";

function Toggle ({cssClass}) {
   const handleToggle = () => {
      console.log(`Clicked the ${cssClass} toggle.`);
   };

   return (
      <button onClick={handleToggle}>Toggle</button>
   );
}

export default Toggle;