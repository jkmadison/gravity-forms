import { Controller, useForm } from "react-hook-form";
import { generateSchema } from "../../lib/generateSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Text from "./Text";
import Email from "./Email";
import Radio from "./Radio";
import Phone from "./Phone";
import Section from "./Section";
import Select from "./CustomSelect";
import Checkbox from "./Checkbox";

export default function Form({ formFields: rawFields }: { formFields: any[] }) {
  const formFields = rawFields.map((field) => ({
    ...field,
    id: field.id.toString(),
  }));
  const schema = generateSchema(formFields);
  const {
    register,
    control,
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
          if (field.type === "SECTION") {
            return <Section key={field.id} />;
          }
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
          if (field.type === "PHONE") {
            return (
              <Phone
                key={field.id}
                field={field}
                errors={errors}
                {...register(field.id)}
              />
            );
          }
          if (field.type === "SELECT") {
            return (
              <Controller
                control={control}
                key={field.id}
                name={field.id}
                render={({ field: renderField }) => (
                  <Select
                    field={{
                      ...field,
                      choices: [
                        {
                          text: "Option 1",
                          value: "option1",
                        },
                        {
                          text: "Option 2",
                          value: "option2",
                        },
                      ],
                    }}
                    errors={errors}
                    {...renderField}
                  />
                )}
              />
            );
          }
          return null;
        })}
        <Checkbox
          field={{ label: "Subscribe to our newsletter" }}
          {...register("123")}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="flex gap-4">
        <p>{`[Is Valid: ${isValid}]`}</p>
        <p>{`[Is Dirty: ${isDirty}]`}</p>
      </div>
    </div>
  );
}
