import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroSection() {
  const ref = useRef(null)
  const videoRef = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    AOS.init({ once: true })
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  // Animation variants for text only
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/motion-graphics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Minimal dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 section-padding flex items-center min-h-screen w-full">
        <div className="container-custom">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight text-white"
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                AI-Powered Tool Suite
              </motion.span>
              <motion.span 
                className="block mt-4 text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                Built for Enterprise Excellence
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Revolutionize your business with intelligent automation, document intelligence, 
              and operational AI built to accelerate enterprise decision-making.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#contact"
                className="group bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 relative overflow-hidden transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="relative z-10">Get a Demo</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#products"
                className="group border-2 border-white/50 hover:border-white text-white hover:bg-white/10 backdrop-blur-sm font-bold px-8 py-4 rounded-2xl flex items-center space-x-3 relative overflow-hidden transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  borderColor: "rgba(255, 255, 255, 0.8)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                <span>Explore Suite</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
