import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-144px)]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  )
}
