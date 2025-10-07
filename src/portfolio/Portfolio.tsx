import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Title } from '../common/components/title/Title'
import { projects, type Project } from '../common/data/projects-data'
import styles from './Portfolio.module.scss'
import { useScrollRestoration } from '../common/hooks/useScrollRestoration'

export const Portfolio: React.FC = () => {
  const navigate = useNavigate()

  useScrollRestoration()

  return (
    <div id="portfolio" className={styles.wrapper}>
      <div className={styles.container}>
        <Title text="Portfolio" />
      </div>

      <div className={styles.projectList}>
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            onClick={() =>
              navigate(
                `/portfolio/${project.title
                  .replace(/[^a-z0-9]/gi, '')
                  .toLowerCase()}`
              )
            }
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
    </div>
  )
}
