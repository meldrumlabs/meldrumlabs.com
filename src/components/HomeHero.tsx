'use client'

import clsx from 'clsx'
import { useState, useEffect, useCallback } from 'react'
import { createNoise3D } from 'simplex-noise'

const GRID_WIDTH = 1152
const GRID_HEIGHT = 482
const SQUARE_SIZE = 96
const GRID_COLUMNS = GRID_WIDTH / SQUARE_SIZE
const GRID_ROWS = GRID_HEIGHT / SQUARE_SIZE
const TOTAL_SQUARES = GRID_COLUMNS * GRID_ROWS

// This is a placeholder image URL. Replace with your actual sprite sheet URL
const SPRITE_SHEET_URL = '/img/kv/meldrum_kv_1_1200.png'

const noise3D = createNoise3D(() => 0.4)

const modAmount = -0.7

const alphaModifiers = [
  [0,0,modAmount],
  [1,0,modAmount],
  [2,0,modAmount],
  [3,0,modAmount],
  [4,0,modAmount],
  [4,0,modAmount],
  [5,0,modAmount + 0.5],
  [6,0,modAmount + 0.3],

  [0,1,modAmount],
  [1,1,modAmount],
  [2,1,modAmount],
  [3,1,modAmount],
  [4,1,modAmount],
  [4,1,modAmount],
  [5,1,modAmount + 0.3],

  [0,2,modAmount],
  [1,2,modAmount],
  [2,2,modAmount],
  [3,2,modAmount],
  [4,2,modAmount],
  [5,2,modAmount],
  [6,2,modAmount + 0.3],

  [0,3,modAmount],
  [1,3,modAmount],
  [2,3,modAmount],
  [3,3,modAmount],
  [4,3,modAmount],
  [4,3,modAmount],
  [5,3,modAmount],

  [0,4,modAmount],
  [1,4,modAmount],
  [2,4,modAmount],
  [3,4,modAmount],
  [4,4,modAmount + 0.3],
]

const alphaModifierMap = Array.from({ length: TOTAL_SQUARES }).map((_, index) => {
  const x = index % GRID_COLUMNS
  const y = Math.floor(index / GRID_COLUMNS)
  const mod = alphaModifiers.find((d) => d[0] === x && d[1] === y)
  return mod ? mod[2] : 0
})

export const HomeHero = function HomeHero({ className, style = {} }: { className: string, style: any }) {
  const [time, setTime] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height })
      setImageLoaded(true)
    }
    img.src = SPRITE_SHEET_URL
  }, [])

  const getNoise = useCallback((x: number, y: number, t: number) => {
    // Increased scale for faster noise transitions
    const scale = 0.2 // Changed from 0.1 to 0.2 for faster effect
    return (noise3D(x * scale, y * scale, t * scale) + 1) / 2 // Normalize to 0-1
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setTime(t => t + 0.02) // Increased from 0.01 to 0.03 for faster animation
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Calculate centering offsets
  const calculateBackgroundPosition = useCallback((x: number, y: number) => {
    // Calculate how much to offset to center the image
    const totalGridWidth = GRID_COLUMNS * SQUARE_SIZE
    const totalGridHeight = GRID_ROWS * SQUARE_SIZE
    
    // Center the image within the grid
    const offsetX = (imageDimensions.width - totalGridWidth) / 2
    const offsetY = (imageDimensions.height - totalGridHeight) / 2

 
    
    // Apply the offset to center the background
    return `-${(x * SQUARE_SIZE) - offsetX}px -${(y * SQUARE_SIZE) - offsetY}px`
  }, [imageDimensions])



  return (
    <div className={clsx(className, "flex flex-col pointer-events-none")} style={{height: GRID_HEIGHT, ...style}}>
      <div
        className="grid border-l border-r border-t border-iroh-gray-300 dark:border-iroh-gray-800"
        style={{
          width: `${GRID_WIDTH}px`,
          gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
        }}
      >
        {Array.from({ length: TOTAL_SQUARES }).map((_, index) => {
          const x = index % GRID_COLUMNS
          const y = Math.floor(index / GRID_COLUMNS)
          const noiseValue = getNoise(x, y, time)
          let opacity = alphaModifierMap[index] + noiseValue;

          return (
            <div
              key={index}
              className="p-2 border-r border-b border-iroh-gray-300 dark:border-iroh-gray-800"
              style={{
                height: SQUARE_SIZE,
                width: SQUARE_SIZE,
              }}
            >
              <div 
                className='w-full h-full' 
                style={{
                  backgroundImage: `url(${SPRITE_SHEET_URL})`,
                  backgroundPosition: calculateBackgroundPosition(x, y),
                  opacity,
                }} 
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
