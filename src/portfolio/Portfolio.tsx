import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import styles from "./Portfolio.module.scss";
import { projects, type Project } from "../common/data/projects-data";
import { Title } from "../common/components/title/Title";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.98 }),
};

export const Portfolio: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [dir, setDir] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (i: number) => {
    setIndex(i);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % (currentProject?.photos.length ?? 1));
  };
  const prev = () => {
    setDir(-1);
    setIndex(
      (i) =>
        (i - 1 + (currentProject?.photos.length ?? 1)) %
        (currentProject?.photos.length ?? 1)
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);


  return (
    <div id={'portfolio'} className={styles.wrapper}>
       <div className={styles.container}>
                <Title text={'Portfolio'}/>
                </div>
      {!currentProject ? (
        <div className={styles.projectList}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectCard}
              onClick={() => setCurrentProject(project)}
            >
              <img
                src={project.photos[0]}
                alt={project.title}
                className={styles.projectThumb}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.projectView}>
          <button
            className={styles.backButton}
            onClick={() => setCurrentProject(null)}
          >
            ← Back
          </button>
          <h2 className={styles.projectHeader}>{currentProject.title}</h2>
          <div className={styles.photoGrid}>
            {currentProject.photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt=""
                className={styles.photoThumb}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        </div>
      )}

      {isOpen && currentProject && (
  <div
    className={styles.lightboxOverlay}
    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) closeLightbox();
    }}
    {...handlers}
  >
    <button className={styles.closeButton} onClick={closeLightbox}>
      ✕
    </button>

    <button className={styles.navButtonLeft} onClick={prev}>
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
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={styles.lightboxImage}
    />

    <button className={styles.navButtonRight} onClick={next}>
      ›
    </button>

    <div className={styles.photoCounter}>
      {index + 1} / {currentProject.photos.length}
    </div>
  </div>
)}

    </div>
  );
};
