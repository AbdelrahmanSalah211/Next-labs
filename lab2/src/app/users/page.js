import React from 'react'
import Link from 'next/link'

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.status !== 200) throw new Error("Failed to fetch users.");
  const users = await response.json();

  return (
    <div className='min-h-[calc(100vh-144px)] p-8 pb-20 flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold text-red-600'>Users</h1>
      <ul className='pt-4'>
        {users.map(user => (
          <li key={user.id} className='pb-2 text-blue-600'>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
