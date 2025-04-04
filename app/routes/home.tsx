import type { Route } from "./+types/home";
import MyForm from "~/myform/MyForm";


import { getValidatedFormData } from "remix-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormData } from "../zodSchema";

const resolver = zodResolver(schema);

export async function action({ request }: Route.ActionArgs) {
  const { errors, data, receivedValues: defaultValues } =
    await getValidatedFormData<FormData>(request, resolver);
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return { errors, defaultValues };
  }

  // Do something with the data
  return data;
}


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <MyForm />;
}
