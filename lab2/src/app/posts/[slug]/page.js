export default async function PostDetail({ params }) {
  const { slug } = await params

  const [postResponse, commentsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`),
    fetch(`https://jsonplaceholder.typicode.com/posts/${slug}/comments`),
  ]);

  if (postResponse.status !== 200 || commentsResponse.status !== 200) throw new Error('Failed to fetch post.');

  const [post, comments] = await Promise.all([postResponse.json(), commentsResponse.json()]);

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-144px)]'>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='text-lg'>{post.desc}</p>
      <h2 className="text-2xl font-semibold pt-6">Comments</h2>
        <ul className="space-y-2">
          {comments.map((c) => (
            <li key={c.id} className="border p-2 rounded">
              <p className="font-semibold">{c.name} ({c.email})</p>
              <p>{c.body}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}
