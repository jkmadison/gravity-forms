import { useForm } from "react-hook-form";
import { generateSchema } from "../../lib/generateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "./Text";
import Email from "./Email";

export default function Form({ formFields: rawFields }: { formFields: any[] }) {
  const formFields = rawFields.map((field) => ({
    ...field,
    id: field.id.toString(),
  }));

  const schema = generateSchema(formFields);
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = handleSubmit((data) => {
    console.log(data);
  });

  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        onSubmit={submitHandler}
      >
        {formFields.map((field) => {
          if (field.type === "TEXT") {
            return (
              <Text
                key={field.id}
                field={field}
                errors={formState.errors}
                {...register(field.id)}
              />
            );
          }
          if (field.type === "EMAIL") {
            return (
              <Email
                key={field.id}
                field={field}
                errors={formState.errors}
                {...register(field.id)}
              />
            );
          }
          return null;
        })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
