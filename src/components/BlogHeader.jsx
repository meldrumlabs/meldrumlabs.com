'use client'

import Link from 'next/link';
import clsx from 'clsx';

import {Button} from '@/components/Button';
import {Logotype} from '@/components/Logotype';
import {MobileSearch} from '@/components/Search';
import {TopLevelNavItem, navItems} from '@/components/Header';

export default function BlogHeader() {
  return (
    <div className='fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8 backdrop-blur-sm dark:backdrop-blur'>
      <div
        className={clsx(
            'absolute inset-x-0 top-full h-px transition',
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      <div className="flex items-center gap-5">
        <Link href="/" aria-label="Home">
          <Logotype className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            {navItems.map((item, i ) => {
              return <TopLevelNavItem key={i} href={item.href}>{item.content}</TopLevelNavItem>;
            })}
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
        </div>
      </div>
    </div>
  )
}
