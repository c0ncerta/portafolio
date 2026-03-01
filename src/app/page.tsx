import styles from "./page.module.css";

export default function Home() {
  const linkedInUrl = "https://www.linkedin.com/in/ram-daod/";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ram Daod",
    jobTitle: "Junior Full-Stack Developer",
    email: "mailto:rmdaod@proton.me",
    sameAs: ["https://github.com/c0ncerta", linkedInUrl],
    knowsLanguage: ["ar", "es", "ca", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.container}>
        {/* HERO */}
        <header className={`${styles.hero} ${styles.reveal} ${styles.delay1}`}>
          <p className={styles.kicker}>
            Barcelona · Remoto / Hibrido · Disponible para contratacion junior
          </p>
          <h1 className={styles.title}>Ram Daod</h1>
          <p className={styles.subtitle}>
            Desarrollador Junior Full-Stack con foco frontend. Construyo
            interfaces claras en React/Next.js y soluciones backend con Node.js
            orientadas a producto.
          </p>

          <div className={styles.actions}>
            <a
              href="mailto:rmdaod@proton.me"
              className={`${styles.btn} ${styles.btnEmail}`}
            >
              Contactar por email
            </a>
            <a
              href="https://github.com/c0ncerta"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGitHub}`}
            >
              GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnLinkedIn}`}
            >
              LinkedIn
            </a>
            <a href="#proyectos" className={`${styles.btn} ${styles.btnProjects}`}>
              Ver proyectos
            </a>
            <a
              href="mailto:rmdaod@proton.me?subject=Solicitud%20de%20CV%20-%20Ram%20Daod"
              className={`${styles.btn} ${styles.btnCv}`}
            >
              Pedir CV
            </a>
          </div>
        </header>

        {/* PROJECTS */}
        <section
          id="proyectos"
          className={`${styles.section} ${styles.reveal} ${styles.delay2}`}
        >
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Proyectos</h2>
            <p className={styles.muted}>
              Cada proyecto resume problema, implementacion y resultado para
              que se entienda rapido mi aporte tecnico.
            </p>
          </div>

          <div className={styles.projectsLayout}>
            <FeaturedProjectCard
              title="Discord-like (colaborador) - en progreso"
              subtitle="App tipo chat para comunidades con soporte y moderacion."
              stack="Node.js"
              repoLabel="Repo privado / en el GitHub del equipo"
              repoUrl=""
              problem="Soporte y gestion manuales consumian tiempo en comunidades activas."
              solution="Diseño de flujos de tickets y herramientas de moderacion anti-spam con comandos de administracion."
              impact="Menos trabajo manual del staff y trazabilidad de incidencias. Pendiente publicar demo publica."
            />

            <div className={styles.secondaryGrid}>
              <ProjectCard
                title="Bot de tickets y moderación"
                subtitle="Automatizacion de soporte para servidores de comunidad."
                stack="Node.js"
                repoLabel="Repo (añadir link cuando lo tengas)"
                repoUrl=""
                problem="Los canales se saturaban y era dificil priorizar incidencias."
                solution="Sistema de creacion de tickets y comandos de control para spam, advertencias y acciones disciplinarias."
                impact="Flujo de soporte mas claro y tiempos de respuesta mas predecibles."
              />
              <ProjectCard
                title="Dotfiles / entorno de desarrollo"
                subtitle="Setup reproducible para desarrollo diario."
                stack="Shell · Editor · Git"
                repoLabel="Repo (anadir link cuando lo tengas)"
                repoUrl=""
                problem="Configurar un entorno nuevo desde cero era lento e inconsistente."
                solution="Dotfiles versionados con aliases, scripts y defaults para shell/editor/git."
                impact="Onboarding tecnico mas rapido y flujo de trabajo mas estable."
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className={`${styles.section} ${styles.reveal} ${styles.delay3}`}>
          <h2 className={styles.h2}>Stack principal</h2>
          <div className={styles.tags}>
            {[
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
              "Node.js",
              "PHP",
              "Python",
              "Git",
              "C/C++ (Arduino)",
              "MySql",
              "MangoDB",
            ].map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section className={`${styles.section} ${styles.reveal} ${styles.delay4}`}>
          <h2 className={styles.h2}>Experiencia y recorrido</h2>
          <ul className={styles.timeline}>
            <li className={styles.timelineItem}>
              <span className={styles.timelineDate}>Actualidad</span>
              <p className={styles.timelineText}>
                Construccion del portfolio, mejora continua de proyectos propios
                y busqueda activa de oportunidades junior.
              </p>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineDate}>Proyectos recientes</span>
              <p className={styles.timelineText}>
                Colaboracion en app tipo Discord y desarrollo de bots de
                tickets/moderacion con Node.js.
              </p>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.timelineDate}>Formacion base</span>
              <p className={styles.timelineText}>
                IFCD0210 de desarrollo web y practica constante en proyectos
                personales.
              </p>
            </li>
          </ul>
        </section>

        {/* ABOUT */}
        <section className={`${styles.section} ${styles.reveal} ${styles.delay5}`}>
          <h2 className={styles.h2}>Sobre mí</h2>
          <p className={styles.p}>
            Me centro en entregar software que funcione de verdad: codigo
            mantenible, buenas bases de UX y solucion orientada al problema del
            usuario.
          </p>
          <p className={styles.p}>
            Idiomas: arabe (nativo), castellano (alto), catalan (alto), ingles
            (C1 funcional sin titulo).
          </p>
        </section>

        <footer className={`${styles.footer} ${styles.reveal} ${styles.delay6}`}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Ram Daod</p>
          <div className={styles.footerLinks}>
            <a className={styles.link} href="mailto:rmdaod@proton.me">
              rmdaod@proton.me
            </a>
            <a
              className={styles.link}
              href="https://github.com/c0ncerta"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/c0ncerta
            </a>
            <a
              className={styles.link}
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ram-daod/
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

type ProjectProps = {
  title: string;
  subtitle: string;
  stack: string;
  problem: string;
  solution: string;
  impact: string;
  repoLabel: string;
  repoUrl: string;
};

function FeaturedProjectCard(props: ProjectProps) {
  return (
    <article className={`${styles.card} ${styles.featuredCard}`}>
      <div className={styles.featuredLabel}>Proyecto destacado</div>
      <div className={styles.cardTop}>
        <div>
          <h3 className={styles.h3}>{props.title}</h3>
          <p className={styles.cardSub}>{props.subtitle}</p>
        </div>
        <span className={styles.pill}>{props.stack}</span>
      </div>

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Problema</dt>
          <dd>{props.problem}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Implementacion</dt>
          <dd>{props.solution}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Resultado</dt>
          <dd>{props.impact}</dd>
        </div>
      </dl>

      <div className={styles.cardBottom}>
        {props.repoUrl ? (
          <a
            className={styles.link}
            href={props.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        ) : (
          <span className={styles.muted}>{props.repoLabel}</span>
        )}
      </div>
    </article>
  );
}

function ProjectCard(props: ProjectProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <h3 className={styles.h3}>{props.title}</h3>
          <p className={styles.cardSub}>{props.subtitle}</p>
        </div>
        <span className={styles.pill}>{props.stack}</span>
      </div>

      <dl className={styles.details}>
        <div className={styles.detailRow}>
          <dt>Problema</dt>
          <dd>{props.problem}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Implementacion</dt>
          <dd>{props.solution}</dd>
        </div>
        <div className={styles.detailRow}>
          <dt>Resultado</dt>
          <dd>{props.impact}</dd>
        </div>
      </dl>

      <div className={styles.cardBottom}>
        {props.repoUrl ? (
          <a
            className={styles.link}
            href={props.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        ) : (
          <span className={styles.muted}>{props.repoLabel}</span>
        )}
      </div>
    </article>
  );
}
