import { useForm } from "react-hook-form";
import { generateSchema } from "../../lib/generateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "./Text";
import Email from "./Email";
import Radio from "./Radio";

export default function Form({ formFields: rawFields }: { formFields: any[] }) {
  const formFields = rawFields.map((field) => ({
    ...field,
    id: field.id.toString(),
  }));
  const schema = generateSchema(formFields);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className=" max-w-screen-sm mx-auto space-y-10">
      <form
        className="flex flex-col gap-8 bg-white p-8 rounded-lg shadow-md"
        onSubmit={submitHandler}
      >
        {formFields.map((field) => {
          if (field.type === "TEXT") {
            return (
              <Text
                key={field.id}
                field={field}
                errors={errors}
                {...register(field.id)}
              />
            );
          }
          if (field.type === "EMAIL") {
            return (
              <Email
                key={field.id}
                field={field}
                errors={errors}
                {...register(field.id)}
              />
            );
          }
          if (field.type === "RADIO") {
            return (
              <Radio
                key={field.id}
                field={field}
                errors={errors}
                {...register(field.id)}
              />
            );
          }
          return null;
        })}
        <button type="submit">Submit</button>
      </form>
      <div className="flex gap-4">
        <p>{`[Is Valid: ${isValid}]`}</p>
        <p>{`[Is Dirty: ${isDirty}]`}</p>
      </div>
    </div>
  );
}
