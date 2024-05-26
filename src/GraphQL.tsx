import { useQuery } from "@apollo/client";
import { CONTACT_FORM } from "./queries/contactForm";
import Form from "./components/form/Form";

export default function GraphQL() {
  const { loading, error, data } = useQuery(CONTACT_FORM, {
    variables: { limit: 100 },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <Form formFields={data?.gfForm?.formFields?.nodes} />;
}
