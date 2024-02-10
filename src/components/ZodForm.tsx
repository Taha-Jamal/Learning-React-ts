import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 character " }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "Age must be atleast 18." }),
});

type FormData = z.infer<typeof schema>;

const ZodForm = () => {
  // using hook library
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 flex flex-col  ">
        <label htmlFor="name" className="forum-label mx-2">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="px-2 border-2 border-black w-60 h-10"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>
      <div className="mb-3 flex flex-col">
        <label htmlFor="age" className=" mx-2">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className=" px-2 border-2 border-black w-60 h-10"
        />
        {errors.age && <p className="text-red-600">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="h-10 w-20 mx-2 text-white rounded-lg bg-blue-500" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ZodForm;
