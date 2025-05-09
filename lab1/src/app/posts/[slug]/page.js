import { posts } from '@/data/posts';

export default async function PostDetail({ params }) {
  const { slug } = await params
  const post = posts.find(p => p.id === slug);
  if (!post) throw new Error('Post not found!');

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-144px)]'>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='text-lg'>{post.desc}</p>
    </div>
  );
}
