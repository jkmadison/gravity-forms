import { z } from "zod";

export const generateSchema = (formFields: any[]) => {
  const schemas = [];
  for (const field of formFields) {
    switch (field.type) {
      case "TEXT":
        schemas.push({
          name: field.id,
          type: z.string().min(1, field.errorMessage),
        });
        break;
      case "EMAIL":
        schemas.push({
          name: field.id,
          type: z.string().email(field.errorMessage),
        });
        break;
      default:
    }
  }
  return z.object(
    Object.fromEntries(schemas.map((schema) => [schema.name, schema.type]))
  );
};
