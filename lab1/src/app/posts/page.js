import Link from 'next/link';
import { posts } from '@/data/posts';

export default function PostsPage() {
  return (
    <div className="min-h-[calc(100vh-144px)] p-8 pb-20 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600">Posts</h1>
      <ul className='pt-4'>
        {posts.map(post => (
          <li key={post.id} className='pb-2 text-blue-600'>
            <Link href={`/posts/${post.id}`}>
              <strong>{post.title}</strong>: {post.desc}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
