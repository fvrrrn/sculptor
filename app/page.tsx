'use client'

import { Canvas } from '@react-three/fiber'

import { Box } from '@/components'
import styles from '@/styles/Home.module.css'

export default function HomePage() {
  return (
    <div className="container">
      <main className={styles.main}>
        <Canvas shadows className={styles.canvas}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </main>
    </div>
  )
}
