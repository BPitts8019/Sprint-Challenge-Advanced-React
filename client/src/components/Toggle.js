import React from "react";

function Toggle ({cssClass, content}) {
   const handleToggle = () => {
      console.log(`Clicked the ${cssClass} toggle.`);
   };

   return (
      <button className="toggle" onClick={handleToggle}>{content}</button>
   );
}

export default Toggle;