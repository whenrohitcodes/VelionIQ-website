import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { TrendingUp, Clock, Shield, Heart, Sparkles } from 'lucide-react'

export default function ImpactStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { 
      label: 'Documents Automated', 
      end: 120000, 
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59, 130, 246, 0.3)'
    },
    { 
      label: 'Avg Processing Time', 
      end: 8, 
      suffix: ' sec',
      icon: Clock,
      color: 'from-emerald-500 to-teal-500',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    { 
      label: 'Accuracy Achieved', 
      end: 98, 
      suffix: '%',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(147, 51, 234, 0.3)'
    },
    { 
      label: 'Client Satisfaction', 
      end: 95, 
      suffix: '%',
      icon: Heart,
      color: 'from-rose-500 to-orange-500',
      glowColor: 'rgba(244, 63, 94, 0.3)'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-24 text-center overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Enhanced Title */}
        <motion.div 
          variants={itemVariants}
          className="mb-16"
        >
          <motion.div 
            className="inline-flex items-center space-x-3 bg-white/60 backdrop-blur-sm border border-primary-200/50 rounded-full px-8 py-4 mb-6"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-primary-600" />
            </motion.div>
            <span className="text-primary-700 font-medium">Our Impact in Numbers</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-display font-bold gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming Businesses Worldwide
          </motion.h2>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Card Background with Gradient */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant hover:shadow-dreamy border border-white/50 p-8 overflow-hidden">
                  
                  {/* Animated Background Glow */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${stat.glowColor} 0%, transparent 70%)`
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Floating Icon */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-elegant mb-6 relative z-10`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Icon Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatDelay: 3
                      }}
                    />
                  </motion.div>

                  {/* Animated Number */}
                  <motion.div 
                    variants={numberVariants}
                    className="text-5xl font-bold bg-gradient-to-br from-primary-600 to-primary-800 bg-clip-text text-transparent mb-4 relative z-10"
                  >
                    {isInView && (
                      <CountUp 
                        end={stat.end} 
                        duration={3} 
                        suffix={stat.suffix || ''} 
                        separator="," 
                        delay={i * 0.2}
                      />
                    )}
                  </motion.div>

                  {/* Label */}
                  <motion.p 
                    className="text-secondary-700 font-semibold text-lg relative z-10"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {stat.label}
                  </motion.p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border border-primary-200/30 rounded-full opacity-50" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-accent-200/30 rounded-full opacity-30" />

                  {/* Particle Effects */}
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
                      style={{
                        top: `${20 + particleIndex * 25}%`,
                        right: `${10 + particleIndex * 15}%`,
                      }}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2 + particleIndex,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particleIndex * 0.3
                      }}
                    />
                  ))}

                  {/* Progress Bar Animation */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-3xl`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: i * 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="mt-16"
        >
          <motion.p 
            className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join thousands of enterprises already experiencing the transformative power of AI automation
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
