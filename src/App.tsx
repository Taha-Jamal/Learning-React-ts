// import Message from "./Message";
// import {BsFillCalanderFill} from 'react-icons/bs'
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { AiFillHeart, AiFillLike } from "react-icons/ai";

// import ListGroup from "./components/ListGroup";
function App() {
  // let items = ["Pak", "India", "Indonesia"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  

  const [alertVisible, setalertVisibility] = useState(false);
  return (
    // <div>
    //   <ListGroup items={items} heading="Cities" onSelectItem= {handleSelectItem} />
    // </div>
    // <div>
    //   {/* <BsFillCalanderFill color= "red" /> */}
    //   {alertVisible && (
    //     <Alert onClose={() => setalertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button /*color = "bg-red-400"*/ onClick={() => setalertVisibility(true)}>
    //     Click Me!
    //   </Button>
    <div>
      <Like onClick={()=> console.log('clickled')
      } />
    </div>
    // </div>
  );
}

export default App;
