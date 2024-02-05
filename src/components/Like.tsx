import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
    onClick: () =>  void;
}
const like = ({onClick}:Props) => {
  const [NotVisible, setVisiblity] = useState(false);

  const toggle = () => {
    setVisiblity(!NotVisible)
    onClick()
  }
  if (NotVisible) return <AiFillHeart color="red" size={25} onClick={toggle} />;
  return <AiOutlineHeart size={25} onClick={toggle} />;
};

export default like;
