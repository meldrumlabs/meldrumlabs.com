"use client"

import { useState, useEffect, useRef } from "react"

const useCases = {
  "Stream Processing": [
    "Meldrum Labs combines bleeding-edge, award-winning research with hands-on experience in building production-grade stream processing systems."
  ],
  "Database Systems": [
    "Meldrum Labs designs and optimizes database internals including storage, indexing, and query optimization."
  ],
  "Distributed Systems": [
    "Meldrum Labs designs distributed systems built for scalability, fault tolerance, and consistent performance in production."
  ],
}

export function UseCaseScroller() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(useCases)[0])
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const timerRef = useRef(null)

  // Get the sentences for the current category
  const sentences = useCases[selectedCategory] || []

  // Handle category change
  const handleCategoryChange = (category) => {
    if (category === selectedCategory) return

    // Start fade out
    setIsVisible(false)

    // After fade out completes, change category and reset index
    setTimeout(() => {
      setSelectedCategory(category)
      setCurrentSentenceIndex(0)
      setIsVisible(true)
    }, 500) // Match this with the CSS transition duration
  }

  // Auto-scroll through sentences
  useEffect(() => {
    if (!isAnimating || sentences.length <= 1) return

    const cycleText = () => {
      // Start fade out
      setIsVisible(false)

      // After fade out completes, change to next sentence
      setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length)
        setIsVisible(true)
      }, 500) // Match this with the CSS transition duration
    }

    // Set timer for cycling
    timerRef.current = setTimeout(cycleText, 2500) // Show each sentence for 5 seconds

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [currentSentenceIndex, isAnimating, sentences.length])

  return (
    <div className="w-full max-w-3xl mx-auto px-5 md:pt-16 pb-8 flex flex-col">
      {/* Sentence display */}
      <div className="relative h-20 md:h-36 lg:h-24 flex mb-10">
        <p
          className={`text-xl font-semibold md:text-2xl transition-opacity duration-500 text-meldrum-blue-400 dark:text-meldrum-blue-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {sentences[currentSentenceIndex]}
        </p>
      </div>

      {/* Pagination dots */}
      {sentences.length > 1 && (
        <div className="flex gap-2 mt-4">
          {sentences.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSentenceIndex ? "bg-iroh-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* Category selector */}
      <div className="flex flex-wrap mt-6 gap-1">
        {Object.keys(useCases).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-2 py-1 text-sm font-semibold transition-colors bg-iroh-gray-200/10 cursor-pointer ${
              selectedCategory === category ? "text-meldrum-green-500" : "text-meldrum-green-800/20 dark:text-meldrum-orange-400 hover:text-iroh-purple-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
