import { posts } from '@/data/posts';
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const filtered = posts.filter(p => p.category === slug);
  if (filtered.length === 0) throw new Error('Invalid category!');
  
  await new Promise(resolve => setTimeout(resolve, 5000));

  return (
    <div className='min-h-[calc(100vh-144px)] flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>{slug}</h1>
      <ul className='pt-4'>
        {filtered.map(post => (
          <li key={post.id} className='pb-2'>
            <Link href={`/posts/${post.id}`}>
              <strong>{post.title}</strong>: {post.desc}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}