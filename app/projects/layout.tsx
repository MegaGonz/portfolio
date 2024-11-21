import React from 'react'
export default function ProjectLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="antialiased max-w-4xl mb-40 flex flex-col ">
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        {children}
      </main>
    </section>
  )
}
