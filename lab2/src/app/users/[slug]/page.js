import Link from 'next/link';

export default async function UserPage({ params }) {
  const { slug } = await params;
  const [userResponse, postsResponse] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users${slug}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${slug}`)]);

  if (userResponse.status !== 200 || postsResponse.status !== 200) throw new Error("Failed to fetch user's posts.");
  const [user, posts] = await Promise.all([userResponse.json(), postsResponse.json()]);

  return (
    <div className='min-h-[calc(100vh-144px)] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>{`${user.name}'s Posts`}</h1>
      <ul className='pt-4'>
        {posts.map(post => (
          <li key={post.id} className='pb-2'>
            <Link href={`/posts/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}