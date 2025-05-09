import React from 'react'
import Link from 'next/link'

const categories = ['adventure', 'action', 'history', 'sports'];

export default function CategoriesPage() {
  return (
    <div className='min-h-[calc(100vh-144px)] p-8 pb-20 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-red-600'>Categories</h1>
      <ul className='pt-4'>
        {categories.map(cat => (
          <li key={cat} className='pb-2 text-blue-600'>
            <Link href={`/categories/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
