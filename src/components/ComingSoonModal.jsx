import { useState } from 'react'

export default function ComingSoonModal({ buttonLabel = "Try It Out" }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-block bg-primary text-black px-6 py-3 rounded shadow hover:bg-opacity-90 transition"
      >
        {buttonLabel}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md text-center shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-3">🚧 Coming Soon</h3>
            <p className="text-gray-700 mb-4">
              This product is in the final stages of development. Stay tuned — launching soon!
            </p>
            <button
              onClick={() => setOpen(false)}
              className="bg-primary text-black px-4 py-2 rounded hover:bg-opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
