import Image from 'next/image'
import Link from 'next/link'

import Logo from "@/components/Logo";
import { ThemeToggle } from './ThemeToggle';
import { BlueskyIcon, DiscordIcon, GitHubIcon, MastodonIcon, TwitterIcon, YouTubeIcon } from './Footer';

const navigation = {
  learn: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ],
  connect: [
    { name: 'Email', href: 'contact@meldrumlabs.com' },
    { name: 'X', href: 'https://x.com/meldrumlabs' },
  ],
  social: [
        {
      name: 'GitHub',
      href: 'https://github.com/meldrumlabs',
      icon: GitHubIcon,
    },
  ],
}

export function FooterMarketing() {
  return (
    <footer className="bg-iroh-gray-1000" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <p className="text-sm leading-6 text-meldrum-green-400">
              Data Systems out of Sweden.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div />
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-meldrum-green-400">Learn</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.learn.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-meldrum-orange-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-meldrum-green-400">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.connect.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-meldrum-orange-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-meldrum-green-400 mr-auto">&copy; 2025 Meldrum Labs AB.</p>
        </div>
      </div>
    </footer>
  )
}
