// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

// styled.ul`
// list-style: none `


// fragments are used instead of div
// empty angel brackets also repersents fragments

//object with {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // passing function via props
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // hook
  //   arr[0]; // variable selected
  //   arr[1]; //updated function
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  // event handler
  //   const handelClick = (event: MouseEvent) => console.log(event);

  //   here allowed
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>
  //           List
  //         </h1>
  //         <p>No item found</p>
  //       </>
  //     );

  // const Message = items.length === 0 ? <p>No item found</p> : null

  return (
    <>
      <h1>{heading}</h1>
      {/* {Message} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group=item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
