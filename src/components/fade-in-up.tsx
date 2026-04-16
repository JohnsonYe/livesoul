'use client'
import { useEffect, useRef, useState } from 'react'

type AnimState = 'pending' | 'hidden' | 'visible'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeInUp({ children, delay = 0, className }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  // 'pending' = SSR default: no inline styles, content fully visible
  const [anim, setAnim] = useState<AnimState>('pending')

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // If reduced motion or no ref, stay in 'pending' (fully visible, no animation)
    if (prefersReduced || !ref.current) return

    const el = ref.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is visible: animate in (or stay visible if already pending)
          setAnim('visible')
          observer.disconnect()
        } else {
          // Element is off-screen: hide it so it can animate in on scroll
          setAnim('hidden')
        }
      },
      { threshold: 0.05, rootMargin: '0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 'pending': no inline styles → content is visible by default (SSR + no-JS fallback)
  if (anim === 'pending') {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: anim === 'visible' ? 1 : 0,
        transform: anim === 'visible' ? 'translateY(0)' : 'translateY(18px)',
        transition:
          anim === 'visible'
            ? `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
            : 'none',
      }}
    >
      {children}
    </div>
  )
}
