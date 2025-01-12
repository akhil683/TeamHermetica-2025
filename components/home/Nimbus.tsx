"use client"
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Target, Lightbulb, FlaskRoundIcon as Flask, Atom, Beaker, Microscope } from 'lucide-react'

// const MovingBackground = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative overflow-hidden w-full h-full">
//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute inset-0"
//           initial={{
//             backgroundPosition: `${Math.random() * 100}% ${Math.random() * 100}%`,
//             opacity: 0.01
//           }}
//           animate={{
//             backgroundPosition: ['0% 0%', '100% 100%'],
//             opacity: [0.1, 0.3, 0.1]
//           }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "reverse",
//             duration: 20 + i * 5,
//             ease: "linear"
//           }}
//           style={{
//             backgroundImage: 'radial-gradient(circle, rgba(255,165,0,0.2) 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }}
//         />
//       ))}
//       {children}
//     </div>
//   )
// }

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay
}: {
  icon: typeof Target
  title: string
  description: string
  delay: number
}) => {
  const controls = useAnimation()

  React.useEffect(() => {
    controls.start(i => ({
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        delay: i * 0.2,
      },
    }))
  }, [controls])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateZ: 5 }}
      whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      className="relative p-12 rounded-2xl bg-white/80 backdrop-blur-sm  border-2 border-orange-500 transition-all duration-300 overflow-hidden group hover:rotate-12 hover:bg-orange-600/20 hover:text-white cursor-pointer"
    >
      {/* <MovingBackground> */}
      <div className="relative z-10">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,255,0,0.2) 3px, transparent 3px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay + 0.1, duration: 0.5 }}
            className="w-28 h-28 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:rotate-45"
          >
            <Icon className="w-16 h-16 text-white" />
          </motion.div>
          <motion.h3
            className="text-3xl text-center font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      {/* </MovingBackground> */}
    </motion.div >
  )
}


export function Nimbus() {
  const features = [
    {
      icon: Flask,
      title: "Nimbus",
      description: "Nimbus, the annual technical fest of the NITH since 2010 is a groundbreaking amalgamation of science and technology with pure delight and enthusiasm. Nimbus has diversified into an organization that apart from showcasing advancement and innovation, also strives for the betterment of society.",
      delay: 0,
    },
    {
      icon: Atom,
      title: "Our Vision",
      description: "To create a vivid environment in which human resources can meet national expectations. With a long-term goal of environmental protection, we analyse all new possibilities in chemcial engineering in conjuction with research strengths in various new technologies, diverse polymers, biochemical and food engineering.",
      delay: 0.2,
    },
    {
      icon: Lightbulb,
      title: "Our Mission",
      description: "We conceive new knowledge via innovative research and collaborative initiatives that provide opportunity for long-term interaction with academia and industry. We aim to train students on intellectual resources to serve society and to create environment- friendly technologies. The mission of Team Hermetica is to inculcate the best knowledge in students and society.",
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

