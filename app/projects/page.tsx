import Image from 'next/image'
import Link from 'next/link'
import { GitHubIcon, BoxArrow } from '@/app/components/icons'
import { port, rbi, lashes, bayCity } from 'public/images/projects'

const projects = [
  {
    title: 'Portfolio Website',
    imgSrc: port,
    githubLink: 'https://github.com/adamgonzo/portfolio',
    moreInfoLink: '/blog/Portfolio'
  },
  {
    title: 'Recipes From The Terminal',
    videoSrc: '/videos/RecipesFromTheTerminal.mp4',
    githubLink: 'https://github.com/adamgonzo/Recipes_from_terminal',
    moreInfoLink: '/blog/recipesFromTheTerminal'
  },
  {
    title: 'Bay City General Glass',
    imgSrc: bayCity,
    githubLink: 'https://github.com/adamgonzo/Bay-City-New-Site',
    moreInfoLink: '/blog/BayCity'
  },
  {
    title: 'RBI Softball',
    imgSrc: rbi,
    githubLink: 'https://github.com/adamgonzo/RBI-Softball',
    moreInfoLink: '/blog/RBISoftball'
  },
  {
    title: 'LashedUpAlly',
    imgSrc: lashes,
    githubLink: 'https://github.com/adamgonzo/RBI-Softball', // Note: Replace with the correct link
    moreInfoLink: '/blog/Lashes'
  }
]

export const metadata = {
  title: 'Projects',
  description: 'Freelance Web Developer.'
}

export default function ProjectPage() {
  return (
    <section>
      <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
        <section
          className="font-sans max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
          id="projects-info"
        >
          coming soon
        </section>
      </main>
    </section>
  );
}
