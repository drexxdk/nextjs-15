interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export default async function Page() {
  const data = await fetch(`${process.env.ROOT}api`);
  const posts = (await data.json()) as IPost[];
  return (
    <>
      <h1>Hello, Home page!</h1>
      {posts.map((post, i) => {
        return <div key={i}>{post.title}</div>;
      })}
    </>
  );
}
