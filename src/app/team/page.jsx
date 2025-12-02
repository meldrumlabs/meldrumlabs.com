import Image from 'next/image'
import BlogHeader from '@/components/BlogHeader'
import { FooterMarketing } from '@/components/FooterMarketing'

export const metadata = {
  title: 'Team',
  description: 'Meet the team at Meldrum Labs',
}

const team = [
  {
    name: 'Max Meldrum',
    role: 'Founder',
    bio: "Max is a data systems engineer and founder of Meldrum Labs. A former PhD student at KTH's Data Systems Lab under Prof. Paris Carbone (co-creator of Apache Flink), he created µWheel, an award-winning embeddable aggregate management system. Max specializes in building reliable, production-grade data systems for critical infrastructure.",
    image: '/images/team/max.jpg',
  },
]

function TeamMember({ member }) {
  return (
    <div className="px-5 sm:px-0">
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-white dark:bg-iroh-gray-900">
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-center">
          {member.image && (
            <div className="flex-shrink-0">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover w-[160px] h-[160px]"
              />
            </div>
          )}
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-meldrum-green-600 dark:text-meldrum-green-400">
              {member.name}
            </h2>
            <p className="mt-2 text-base font-medium text-meldrum-orange-500 dark:text-meldrum-orange-400">
              {member.role}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div>
      <BlogHeader />
      <div className="my-20 mx-auto max-w-2xl min-h-screen lg:mt-32">
        <header className="max-w-2xl px-4 sm:px-0">
          <h1 className="text-4xl font-space font-bold tracking-tight text-meldrum-green-600 dark:text-meldrum-green-400 sm:text-4xl">
            Team
          </h1>
          <p className="mt-6 text-base text-meldrum-orange-500 dark:text-meldrum-orange-400">
            We at Meldrum Labs are builders at heart and deeply care about building reliable and innovative data systems.
          </p>
        </header>
        <div className="mt-20 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-8">
            {team.map((member, index) => (
              <TeamMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
      <FooterMarketing />
    </div>
  )
}
