import React, { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
 
}
const ExpandableText = ({ children, maxChar = 200 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChar) {
    return <div>{children}</div>;
  }
  const text =isExpanded ? children: children.substring(0, maxChar);
  return (
    <div>
      {text}...
      <button className="bg-red-400 border-2 border-black h-8 w-16 mx-1" onClick={()=> setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
