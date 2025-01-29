import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false,
  loading: () => <div className="loading">Loading...</div>
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Airfryer - National Digital Asset</title>
        <meta name="description" content="Tracking the trend and use of air fryers" />
      </Head>

      <main className="container">
        <Scene />
        
        <motion.div 
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            animate={{ y: [-20, 0] }}
            transition={{ duration: 1 }}
          >
            AIRFRYER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            National digital asset tracking the trend and use of air fryers
          </motion.p>
        </motion.div>
      </main>
    </>
  )
}
