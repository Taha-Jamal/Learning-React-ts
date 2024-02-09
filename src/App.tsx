import produce from "immer";
import Message from "./Message";
// import {BsFillCalanderFill} from 'react-icons/bs'
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { AiFillHeart, AiFillLike } from "react-icons/ai";
import ListGroup from "./components/ListGroup";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

function App() {
  // let items = ["Pak", "India", "Indonesia"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // const [alertVisible, setalertVisibility] = useState(false);

  // choosing state structure
  // const [firstname, setfirstname] = useState('')
  // const [lastname, setlastname] = useState('')

  // avoid depply nested structures
  //  const [person,setperson] = useState({
  //     firstname: '',
  //     lastname: ''
  //   })
  //   const [isLoading, setLoading] = useState('')

  // updating objects
  // const [drink, setdrink] = useState({
  //   title: "Americano",
  //   price: 5,
  // });

  // const handleClick = () => {
  //   // const newdrink = {
  //   //   ...drink,
  //   //   price: 6,
  //   // };

  //   // setdrink(newdrink);
  //   setdrink({...drink,price: 6})
  // };

  // update nested objects
  // const [customer, setCustomer] = useState({
  //   name: "john",
  //   address: {
  //     city: "blah",
  //     zipCode: 920,
  //   },
  // });
  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 123 },
  //   });
  // };

  //  updating array, same concept as objects

  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const handleClick = () => {
  //   // add
  //   setTags([...tags, "sad"]);

  //   // remove
  //   setTags(tags.filter((tag) => tag !== "happy"));

  //   // update
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };

  //  updating array of objects
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "bug 1", fixed: false },
  //   { id: 2, title: "bug 2", fixed: false },
  // ]);
  // const  handleClick = () => {
  //   setBugs(bugs.map(bug => bug.id === 1 ? {...bug,fixed: true}: bug))
  // }

  // immer library to simplify update logic of array and objects
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "bug 1", fixed: false },
  //   { id: 2, title: "bug 2", fixed: false },
  // ]);

  // const  handleClick = () => {
  //   setBugs(produce(draft =>{
  //    const bug = draft.find(bug => bug.id === 1)
  //     if(bug)
  //     bug.fixed = true
  //   }))
  // }

  // sharing state between components
  // const [cartItems, setcartitems] = useState(["product1", "product2"]);

  // Exercise for updating state
  // Exercise 1

  // const [game,setgame] = useState({
  //   id:1,
  //   player: {
  //     name:"John Doe"
  //   }

  // })

  //   const handleClick = () =>
  //   {
  //     setgame({...game,player:{...game.player,name: 'hi'}})
  //   }

  // Exercise 2

  // const [pizza,setpizza] = useState({
  //   name: 'spicy pep',
  //   toppings: ['Mushroom']
  // })

  // const handleClick = () => {
  //   setpizza({...pizza,toppings:[...pizza.toppings, 'macroni']})
  // };

  // Exercise 3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "prodect1", quantity: 1 },
      { id: 2, title: "prodect2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity++ } : item
      ),
    });
  };

  return (
    <div>
      <Form />
    </div>

    // expandable text component
    // <div>
    //   <ExpandableText >
    //     hello world Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni saepe omnis ullam aut molestiae enim voluptas eaque consequatur. Ratione officiis, quae id laudantium perferendis omnis eligendi tempora temporibus, itaque totam dolor cum et maxime numquam necessitatibus illo, molestiae modi aspernatur. In sunt quia voluptas nihil expedita vel id iure hic nulla, quo, doloremque fugit quam magnam laudantium labore enim fuga qui, nesciunt commodi sit dolorum modi eaque itaque ut. A aliquam, iste dolorum id maxime reiciendis! Cum, laboriosam ut dolore esse ex libero perferendis assumenda animi veniam facilis? Distinctio quis eveniet nam doloribus minus dolorem voluptas at reprehenderit natus?
    //   </ExpandableText>
    // </div>

    // cart list
    // <div>
    //   <NavBar cartItemsCount={cartItems.length} />
    //   <Cart cartItem={cartItems} onClear={() => setcartitems([])}/>
    // </div>

    // immer library to simplify update logic of array and objects
    // <div>
    //   {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'fixed' : 'new' }</p>)}
    //   <button onClick={handleClick}>click me</button>
    // </div>

    // updating objects
    // <div className="mx-4">
    //   {drink.price}
    //   <button className="bg-red-400 w-20 h-10 mx-4 my-4" onClick={handleClick}>
    //     hey
    //   </button>
    // </div>

    // list

    // <div>
    //   <ListGroup items={items} heading="Cities" onSelectItem= {handleSelectItem} />
    // </div>

    // button
    // <div>
    //   {/* <BsFillCalanderFill color= "red" /> */}
    //   {alertVisible && (
    //     <Alert onClose={() => setalertVisibility(false)}>My Alert</Alert>
    //   )}
    //   <Button color = "bg-red-400" onClick={() => setalertVisibility(true)}>
    //     Click Me!
    //   </Button>

    // heart

    /* <div>
      <Like onClick={()=> console.log('clickled')
      } />
    </div> */

    // </div>
  );
}

export default App;
