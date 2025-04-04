import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "react-router";
import { useRemixForm } from "remix-hook-form";
import { schema, type FormData } from "~/zodSchema";

const resolver = zodResolver(schema);

export default function MyForm() {
    const {
      handleSubmit,
      formState: { errors },
      register,
    } = useRemixForm<FormData>({
      mode: "onSubmit",
      resolver,
    });
  
    return (
      <Form onSubmit={handleSubmit} method="POST">
        <label>
          Name:
          <input type="text" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          Email:
          <input type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </Form>
    );
  }