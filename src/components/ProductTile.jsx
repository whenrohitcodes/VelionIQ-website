import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FileText,
  ShieldCheck,
  SearchCheck,
  LayoutTemplate,
  MailCheck,
  ClipboardList,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const iconMap = {
  Flowgenix: FileText,
  AutoRecon: SearchCheck,
  PriceGuard: ShieldCheck,
  SmartSpec: LayoutTemplate,
  InboxIntelli: MailCheck,
  ClaimWise: ClipboardList,
}

const gradientMap = {
  Flowgenix: 'from-blue-500 to-cyan-500',
  AutoRecon: 'from-emerald-500 to-teal-500',
  PriceGuard: 'from-amber-500 to-orange-500',
  SmartSpec: 'from-purple-500 to-pink-500',
  InboxIntelli: 'from-indigo-500 to-blue-500',
  ClaimWise: 'from-rose-500 to-red-500',
}

const glowColorMap = {
  Flowgenix: 'rgba(59, 130, 246, 0.4)',
  AutoRecon: 'rgba(16, 185, 129, 0.4)',
  PriceGuard: 'rgba(245, 158, 11, 0.4)',
  SmartSpec: 'rgba(147, 51, 234, 0.4)',
  InboxIntelli: 'rgba(99, 102, 241, 0.4)',
  ClaimWise: 'rgba(244, 63, 94, 0.4)',
}

export default function ProductTile({ title, subtitle, link }) {
  const Icon = iconMap[title.replace(/\s+/g, '')] || FileText
  const gradient = gradientMap[title.replace(/\s+/g, '')] || 'from-primary-500 to-primary-600'
  const glowColor = glowColorMap[title.replace(/\s+/g, '')] || 'rgba(59, 130, 246, 0.4)'

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group"
    >
      <Link
        to={link}
        className="block card p-8 relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 border-2 border-transparent hover:border-primary-200/50"
      >
        {/* Animated Background Glow */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
              style={{
                top: `${30 + i * 20}%`,
                left: `${20 + i * 30}%`,
              }}
              animate={{
                y: [-10, -20, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
        
        {/* Floating Icon Background with Animation */}
        <motion.div 
          className="absolute top-4 right-4 opacity-10 group-hover:opacity-30"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Sparkles className="w-8 h-8 text-primary-400" />
        </motion.div>

        <div className="relative z-10">
          {/* Enhanced Icon Container with 3D Effect */}
          <motion.div 
            variants={childVariants}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} shadow-elegant mb-6 relative overflow-hidden`}
            whileHover={{ 
              rotateY: 15,
              rotateX: 5,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon glow effect */}
            <motion.div 
              className="absolute inset-0 bg-white/20 rounded-2xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <Icon className="w-8 h-8 text-white relative z-10" />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 3
              }}
            />
          </motion.div>

          {/* Enhanced Content */}
          <motion.div 
            variants={childVariants}
            className="space-y-4"
          >
            <div>
              <motion.h3 
                className="text-2xl font-display font-bold text-secondary-900 group-hover:text-primary-600 mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-secondary-600 leading-relaxed text-lg"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {subtitle}
              </motion.p>
            </div>

            {/* Enhanced Action Arrow with Animation */}
            <motion.div 
              className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700"
              variants={childVariants}
            >
              <span className="text-sm">Learn More</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Interactive Border Animation */}
          <motion.div 
            className="absolute inset-0 rounded-2xl border-2 border-primary-400/20 opacity-0"
            whileHover={{ 
              opacity: 1,
              borderColor: "rgba(59, 130, 246, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Progress Bar Animation on Hover */}
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-2xl"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Corner Decorations */}
        <motion.div 
          className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary-300/30 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary-300/30 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </Link>
    </motion.div>
  )
}
