import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { BookOpenIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

import {FooterMarketing} from '@/components/FooterMarketing';
import {HeaderSparse} from '@/components/HeaderSparse';
import {HomeHero} from '@/components/HomeHero';
import {UsersShowcase} from '@/components/UsersShowcase';
import {FromTheBlog} from '@/components/FromTheBlog';
import {WrenchCodeIcon} from '@/components/icons/WrenchCodeIcon';
import {PerfChartIllustration} from '@/components/PerfChartIllustration';
import {ConnectDevicesIllustration} from '@/components/ConnectDevicesIllustration';
import {LogoCloud} from '@/components/home/LogoCloud';
import {UseCaseScroller} from '@/components/home/UseCases';

import logoRust from '@/images/language-logos/rust.svg';
import { CodeBlock } from '@/components/CodeBlock';

export const metadata = {
  title: 'Meldrum Labs',
  description:
    'Reliable Data Systems',
};

export default function Page() {
  return (
    <div>
      <HeaderSparse />

      <div className="bg-iroh-gray-50 dark:bg-iroh-gray-900 text-iroh-gray-700 dark:text-iroh-gray-100 h-92 justify-between font-space">
        <main className="mb-auto flex flex-col min-h-92">
          {/* hero */}
          <section className="min-h-92 pt-20 bg-cover" style={{ height: 600 }}>
            <div className='relative h-10 max-w-6xl mx-auto'>
              <div className='absolute h-full top-0 left-0 bg-linear-to-t from-iroh-gray-300 dark:from-zinc-800 to-transparent' style={{ width: 1 }} />
              <div className='absolute h-full top-0 right-0 bg-linear-to-t from-iroh-gray-300 dark:from-zinc-800 to-transparent' style={{ width: 1 }}  />
            </div>
            <div className='relative max-w-6xl mx-auto'>
              <div className='absolute z-10 overflow-hidden w-full'>
                <HomeHero className='' />
              </div>
              <div className="absolute z-40 max-w-6xl mx-auto md:grid md:grid-cols-4 md:gap-4">
                <div className="col-span-2 pl-8" style={{ paddingTop: 100 }}>
                  <h1 className="text-meldrum-green-400 text-5xl font-extrabold leading-tight drop-shadow-glow">
                    Reliable Data Systems
                  </h1>
                  <h3 className="text-meldrum-orange-400 mt-3 leading-normal">Meldrum Labs builds specialized data systems that require both reliability and innovation.</h3>
                  <div className='flex mt-3'>
                    <a 
                      href="/about" 
                      className="my-4 p-3 px-4 transition border-2 border-meldrum-green-600 text-meldrum-green-600 uppercase hover:bg-meldrum-green-600 hover:text-white dark:border-meldrum-green-400 dark:text-meldrum-green-400 dark:hover:bg-meldrum-green-400 dark:hover:text-gray-900 plausible-event-name=Home+Hero+Start+Project+Click"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='max-w-6xl mx-auto border-l border-r border-iroh-gray-300 dark:border-iroh-gray-800 grid grid-cols-1 md:grid-cols-2 border-b border-iroh-gray-300 dark:border-iroh-gray-800'>
            <LogoCloud />
            <UseCaseScroller />
          </section>

          <section className='max-w-6xl w-full mx-auto px-10 border-r border-l border-t border-iroh-gray-300 dark:border-iroh-gray-800 py-20'>
            <div className='w-full md:px-5'>
              <h3 className='text-lg tracking-wider font-bold text-meldrum-green-600 dark:text-meldrum-green-400 uppercase'>Blog Posts</h3>
            </div>
            <FromTheBlog />
          </section>

        </main>
        <FooterMarketing />
      </div>
    </div>
  )
}


