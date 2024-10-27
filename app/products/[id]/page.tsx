import { Metadata } from "next";
import { setTimeout } from "timers";

// interface IPage {
//   heading: string;
// }

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  const data = await fetch(`${process.env.ROOT}products/${id}/api`).then(
    (res) => res.json()
  );

  return {
    title: data.heading,
  };
}

export default async function Page({ params }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const id = (await params).id;
  const data = await fetch(`${process.env.ROOT}products/${id}/api/`).then(
    (res) => res.json()
  );
  return (
    <section>
      <h1>{data.heading}</h1>
    </section>
  );
}
