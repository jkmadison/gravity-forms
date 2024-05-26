import { useQuery } from "@apollo/client";
import { CONTACT_FORM } from "./queries/contactForm";

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

  console.log(data);

  return (
    <ul>
      {data.books.map((item: any) => {
        return (
          <li key={item.id}>
            <a href="#">{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
