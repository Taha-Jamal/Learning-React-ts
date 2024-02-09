import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // using hook library
  const { register, handleSubmit } = useForm();

    const onSubmit = (data: FieldValues) => console.log(data);
    


  // using state hook for getting values of input field
  //   const [isperson, setPerson] = useState({
  //     name: "",
  //     age: 0,
  //   });

  // using ref hook for getting values of input field
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  // if (nameRef.current !== null) person.name = nameRef.current.value;
  // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  // console.log(person);

  // logging state hook
  // console.log(isperson);
  //   };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     console.log("submitted");
      //   }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="forum-label mx-2">
          Name
        </label>
        <input
          {...register("name")}
          //   onChange={(event) =>
          //     setPerson({ ...isperson, name: event.target.value })
          //   }
          //   value={isperson.name}

          /*ref={nameRef} */ id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="forum-label mx-2">
          Age
        </label>
        <input
          {...register("age")}
          //   onChange={(event) =>
          //     setPerson({ ...isperson, age: parseInt(event.target.value) })
          //   }
          //   value={isperson.age}

          /*ref={ageRef}*/ id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="h-10 w-20 mx-4 rounded-lg bg-blue-500" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
