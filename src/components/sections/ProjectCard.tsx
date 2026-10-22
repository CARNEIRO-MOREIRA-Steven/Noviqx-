import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TagList } from "@/components/ui/TagList";
import { ProjectVisual } from "./ProjectVisual";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.work} data-category={project.category}>
      <div className={styles.shot} tabIndex={0} aria-label={`Aperçu : ${project.name}`}>
        {project.demo && <span className={styles.badge}>Concept de démonstration</span>}
        <div className={styles.inner}>
          {project.image ? (
            <Image
  src={project.image.src}
  alt={project.image.alt}
  width={project.image.width}
  height={project.image.height}
  sizes="(min-width: 900px) 66vw, 100vw"
  className={styles.image}
  loading={project.image.src === "/_next/static/media/Tremplin.1g_bsv_0m_8xh.png" ? "eager" : "lazy"}
/>
          ) : (
            <ProjectVisual kind={project.visual} />
          )}
        </div>
        <div className={styles.veil}>{project.hover}</div>
      </div>

      <div className={styles.text}>
        <div>
          <Eyebrow>{project.type}</Eyebrow>
          <h3 className={styles.name}>{project.name}</h3>
        </div>
        <div>
          <p className={styles.desc}>{project.description}</p>
          <TagList tags={project.tags} className={styles.tags} />
          {project.url && (
            <a className={styles.visit} href={project.url} target="_blank" rel="noopener noreferrer">
              Voir le site en ligne ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
