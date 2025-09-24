import { Icons } from '@/components/icons'
import { Experience, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export const projectsData: Project[] = [
  {
    image: 'assets/images/3-devices-black (4).png',
    title: 'Full Stack AI SaaS Full Responsive roast-ai',
    description:
      'RoastUI is a Full AI SaaS Full Responsive using Next.js, TailwindCSS, Stripe payment, Google OAuth, Docker, GPT-4o, Prisma for database and AWS for hosting.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Stripe API',
      'OpenAI API',
      'AWS',
      'TailwindCSS',
    ],
    links: {
      preview: 'https://roastui.design/',
      github: 'https://github.com/JohnAi-star/roast-ui',
      githubApi: '#',
    },
  },
  {
    image: 'assets/images/3-devices-black (3).png',
    title: 'AI SaaS Full Story Craft',
    description:
      'Story Craft is A Full Stack AI SaaS Full Responsive using Next.js, Tailwindcss, TypeScript, React JS, PostgreSQL, Clerk Authentication and PostgreSQL for database.',
    technologies: [
      'Next.js',
      'React.js',
      'TypeScript',
      'TailwindCSS',
      'PostgreSQL',
      'Paypal API',
      'Clerk Authentication',
      'Gemini API',
    ],
    links: {
      preview: 'https://generate-story-ai.vercel.app/',
      github: 'https://github.com/JohnAi-star/generate-story-ai',
      githubApi: '#',
    },
  },
  {
    image: 'assets/images/3-devices-black (2).png',
    title: 'MERN Stack E-commerce Website forever',
    description:
      'A Full Stack E-commerce Website Full Responsive Using React JS and Stripe Payment. contact me to build your ecommerce platform.',
    technologies: [
      'React.js',
      'TypeScript',
      'TailwindCSS',
      'PostgreSQL',
      'Stripe API',
    ],
    links: {
      preview: 'https://foreverbuy.in/',
      github: '#',
      githubApi: '#',
    },
  },
  {
    image: 'assets/images/3-devices-black.png',
    title: 'E-commerce website Full Responsive Metics Fashion',
    description:
      'Metics Fashion – Fashion for everyone is an e-commerce website Full Responsive using Elementor + woocommerce on WordPress. IIt\'s amazing for brand clothing.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'Stripe API',
    ],
    links: {
      preview: 'https://meticsfashion.com/',
      github: '#',
      githubApi: '#',
    },
  },
  {
    image: 'assets/images/3-devices-black (1).png',
    title: 'E-commerce Sport website full responsive',
    description:
      'WOS - The Best Basketballs And SportsWear For Your Needs is an e-commerce website full responsive using Elementor + woocommerce on WordPress. It\'s amazing to build like this to sell your product as you want.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'Stripe API',
    ],
    links: {
      preview: 'https://wilsononlineshop.com/',
      github: '#',
      githubApi: '#',
    },
  },
  {
    image: 'assets/images/3-devices-white.png',
    title: 'Thothdesk Global Services website',
    description:
      'Thothdesk Global – STRATEGY | INNOVATION | SERVICES is a Services website Full responsive using Elementor on WordPress. It\'s amazing to build another one like this to help many customers with your service.',
    technologies: [
      'WordPress',
      'WooCommerce',
      'Elementor',
      'Stripe API',
    ],
    links: {
      preview: 'https://thothdesk.com/',
      github: '#',
      githubApi: '#',
    },
  },
] as const

export const experiencesData: Experience[] = [
  {
    title: 'Front end developer as a freelancer in many platforms',
    company: 'Upwork, People Per Hour, Freelancer',
    description:
      'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    period: '2022 Jan - Now',
    technologies: ['React', 'TypeScript', 'Next.js','TailwindCSS + Shad-cn', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
]

export const skillsData: Skill[] = [
  { name: 'Sass', icon: <Icons.sass className="size-12" /> },
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'React', icon: <Icons.react className="size-12" /> },
  { name: 'NextJS', icon: <Icons.nextjs className="size-12" /> },
  { name: 'Prisma', icon: <Icons.prisma className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
]
