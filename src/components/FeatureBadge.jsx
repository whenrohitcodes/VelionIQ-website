import { useState } from 'react'

export default function FeatureBadgeGroup({ features }) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {features.map((text, idx) => (
        <button
          key={idx}
          onClick={() => setSelected(idx)}
          className={`px-4 py-2 rounded-full font-medium border transition-all duration-300
            ${selected === idx
              ? 'bg-primary text-white scale-105 shadow-lg'
              : 'bg-white text-primary border-primary hover:scale-105 hover:shadow'}
          `}
        >
          {text}
        </button>
      ))}
    </div>
  )
}
