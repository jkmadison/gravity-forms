import { z } from "zod";

export const generateSchema = (formFields: any[]) => {
  const schemas: { name: any; type: any }[] = [
    { name: 123, type: z.boolean().optional() },
  ];
  for (const field of formFields) {
    switch (field.type) {
      case "TEXT":
        schemas.push({
          name: field.id,
          type: z.string().min(1, field.errorMessage),
        });
        break;
      case "PHONE":
        schemas.push({
          name: field.id,
          type: z
            .string()
            .regex(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, field.errorMessage),
        });
        break;
      case "EMAIL":
        schemas.push({
          name: field.id,
          type: z.string().email(field.errorMessage),
        });
        break;
      case "RADIO":
        schemas.push({
          name: field.id,
          type: z.string().nullable(),
        });
        break;
      case "SELECT":
        schemas.push({
          name: field.id,
          type: z.string().nullable(),
        });
        break;
      default:
    }
  }
  return z.object(
    Object.fromEntries(schemas.map((schema) => [schema.name, schema.type]))
  );
};
