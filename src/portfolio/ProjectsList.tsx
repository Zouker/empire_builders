import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import { projects, type Project } from '../common/data/projects-data'
import styles from './ProjectsList.module.scss'

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.98 }),
}

export const ProjectsList: React.FC = () => {
  const { projectTitle } = useParams<{ projectTitle: string }>()
  const navigate = useNavigate()
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [index, setIndex] = useState<number>(0)
  const [dir, setDir] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const project = projects.find(
      (p) =>
        p.id.toString() === projectTitle ||
        p.title.replace(/[^a-z0-9]/gi, '').toLowerCase() === projectTitle
    )
    if (!project) navigate('/404')
    else setCurrentProject(project)
    window.scrollTo(0, 0)
  }, [projectTitle, navigate])

  const openLightbox = (i: number) => {
    setIndex(i)
    setIsOpen(true)
  }
  const closeLightbox = () => setIsOpen(false)

  const next = () => {
    setDir(1)
    setIndex((i) => (i + 1) % (currentProject?.photos.length ?? 1))
  }

  const prev = () => {
    setDir(-1)
    setIndex(
      (i) =>
        (i - 1 + (currentProject?.photos.length ?? 1)) %
        (currentProject?.photos.length ?? 1)
    )
  }

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!currentProject) return null

  return (
    <div className={styles.projectView}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className={styles.projectHeader}>{currentProject.title}</h2>

      <div className={styles.photoGrid}>
        {currentProject.photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`${currentProject.title} ${i + 1}`}
            className={styles.photoThumb}
            onClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {isOpen && (
        <div
          className={styles.lightboxOverlay}
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
          {...handlers}
        >
          <button className={styles.closeButton} onClick={closeLightbox}>
            ✕
          </button>
          <button
            className={`${styles.navButtonLeft} ${styles.nav}`}
            onClick={prev}
          >
            ‹
          </button>
          <motion.img
            key={index}
            src={currentProject.photos[index]}
            custom={dir}
            variants={slideVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={styles.lightboxImage}
          />
          <button
            className={`${styles.navButtonRight} ${styles.nav}`}
            onClick={next}
          >
            ›
          </button>
          <div className={styles.photoCounter}>
            {index + 1} / {currentProject.photos.length}
          </div>
        </div>
      )}
    </div>
  )
}
