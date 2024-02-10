import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

const ZodForm = () => {
  // using hook library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="forum-label mx-2">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="text-red-600">{errors.name.message}</p>
        )}
        
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="forum-label mx-2">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-red-600">{errors.age.message}</p>
        )}
      </div>
      <button className="h-10 w-20 mx-4 rounded-lg bg-blue-500" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ZodForm;
