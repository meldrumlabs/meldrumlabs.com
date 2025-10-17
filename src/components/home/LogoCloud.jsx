"use client"
import React from 'react';
import {ThemeImage} from '@/components/ThemeImage'
import { useEffect, useRef } from "react"

// each of these has a png at /img/user-logos/${COMPANY}.png
const companies = [
  "polygon",
];

export function LogoCloud({ speed = 0.25, height = 150 }) {
  const scrollerRef = useRef(null)
  const innerScrollerRef = useRef(null)
  
  // If only one company, show it statically centered
  const isSingleCompany = companies.length === 1;

  useEffect(() => {
    // Skip animation setup if only one company
    if (isSingleCompany || !scrollerRef.current || !innerScrollerRef.current) return
    
    // Clone the content for seamless scrolling
    const scrollerContent = Array.from(innerScrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      innerScrollerRef.current.appendChild(duplicatedItem)
    })
    
    // Animation function
    let animationId
    let startTime = null
    let progress = 0
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      
      // Calculate how much to move based on elapsed time and speed
      const newProgress = (elapsed * speed) / 1000
      const delta = newProgress - progress
      progress = newProgress
      
      // Move the scroller
      if (innerScrollerRef.current) {
        innerScrollerRef.current.style.transform = `translateX(-${progress % 50}%)`
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    animationId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [speed, isSingleCompany])

  return (
    <div>
      <div className="pl-5 md:pl-10 pt-8 lg:max-w-none">
        <h1 className="text-lg font-medium text-iroh-gray-600 dark:text-meldrum-green-400">Trusted by</h1>
      </div>
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient masks for fading edges - only show for multiple companies */}
        {!isSingleCompany && (
          <>
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-linear-to-r from-iroh-gray-50 dark:from-iroh-gray-900 to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-linear-to-l from-iroh-gray-50 dark:from-iroh-gray-900 to-transparent"></div>
          </>
        )}
        
        {/* Scroller container */}
        <div ref={scrollerRef} className={`flex w-full h-full overflow-hidden ${isSingleCompany ? 'justify-center' : ''}`}>
          <div ref={innerScrollerRef} className={`flex ${isSingleCompany ? '' : 'animate-scroll whitespace-nowrap'}`}>
            {companies.map((co, index) => (
              <div key={`${co}-${index}`} style={{ height, width: height * 1.4 }} className="flex items-center justify-center px-4">
                <ThemeImage
                  key={co}
                  alt={`${co} logo`}
                  darkSrc={`/img/user-logos/${co}.svg`}
                  lightSrc={`/img/user-logos/${co}.svg`}
                  width={height * 1.4}
                  height={height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


// export function LogoCloud({ speed = 0.25, height = 150 }) {
//   const scrollerRef = useRef(null)
//   const innerScrollerRef = useRef(null)

//   useEffect(() => {
//     if (!scrollerRef.current || !innerScrollerRef.current) return

//     // Clone the content for seamless scrolling
//     const scrollerContent = Array.from(innerScrollerRef.current.children)
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true)
//       innerScrollerRef.current.appendChild(duplicatedItem)
//     })

//     // Animation function
//     let animationId
//     let startTime = null
//     let progress = 0

//     const animate = (timestamp) => {
//       if (!startTime) startTime = timestamp
//       const elapsed = timestamp - startTime

//       // Calculate how much to move based on elapsed time and speed
//       const newProgress = (elapsed * speed) / 1000
//       const delta = newProgress - progress
//       progress = newProgress

//       // Move the scroller
//       if (innerScrollerRef.current) {
//         innerScrollerRef.current.style.transform = `translateX(-${progress % 50}%)`
//       }

//       animationId = requestAnimationFrame(animate)
//     }

//     animationId = requestAnimationFrame(animate)

//     return () => {
//       cancelAnimationFrame(animationId)
//     }
//   }, [speed])

//   return (
//     <div>
//       <div className="pl-5 md:pl-10 pt-8 lg:max-w-none">
//         <h1 className="text-lg font-medium text-iroh-gray-600 dark:text-meldrum-green-400">Trusted by</h1>
//       </div>
//       <div className="relative w-full overflow-hidden py-4">
//         {/* Gradient masks for fading edges */}
//         <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-linear-to-r from-iroh-gray-50 dark:from-iroh-gray-900 to-transparent"></div>
//         <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-linear-to-l from-iroh-gray-50 dark:from-iroh-gray-900 to-transparent"></div>

//         {/* Scroller container */}
//         <div ref={scrollerRef} className="flex w-full h-full overflow-hidden">
//           <div ref={innerScrollerRef} className="flex animate-scroll whitespace-nowrap">
//             {companies.map((co, index) => (
//               <div key={`${co}-${index}`} style={{ height, width: height * 1.4 }} className="flex items-center justify-center px-4">
//                 <ThemeImage
//                   key={co}
//                   alt={`${co} logo`}
//                   darkSrc={`/img/user-logos/${co}.png`}
//                   lightSrc={`/img/user-logos/${co}.png`}
//                   width={height * 1.4}
//                   height={height}
//                   className="object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

