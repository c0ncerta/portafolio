"use client";

import { type MouseEvent, useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const emailAddress = "rmdaod@proton.me";
  const linkedInUrl = "https://www.linkedin.com/in/ram-daod/";
  const cvPdfUrl = "https://pdflink.to/cv_rmdaod/";
  const [showLinkedInAlert, setShowLinkedInAlert] = useState(false);
  const [showEmailCopiedToast, setShowEmailCopiedToast] = useState(false);

  const handleLinkedInClick = (_event: MouseEvent<HTMLButtonElement>) => {
    setShowLinkedInAlert(true);
  };

  const handleEmailClick = () => {
    void navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setShowEmailCopiedToast(true);
      })
      .catch(() => {
        // Clipboard can fail if permissions are blocked by the browser.
      });
  };

  useEffect(() => {
    if (!showLinkedInAlert) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowLinkedInAlert(false);
    }, 5200);

    return () => window.clearTimeout(timeoutId);
  }, [showLinkedInAlert]);

  useEffect(() => {
    if (!showEmailCopiedToast) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowEmailCopiedToast(false);
    }, 2600);

    return () => window.clearTimeout(timeoutId);
  }, [showEmailCopiedToast]);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ram Daod",
    jobTitle: "Junior Full-Stack Developer",
    email: `mailto:${emailAddress}`,
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
      <a className={styles.skipLink} href="#proyectos">
        Saltar al contenido principal
      </a>
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
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              className={`${styles.btn} ${styles.btnEmail}`}
              aria-label={`Contactar por email a ${emailAddress}. También copia el correo al portapapeles.`}
            >
              Contactar por email
            </a>
            <a
              href="https://github.com/c0ncerta"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGitHub}`}
              aria-label="GitHub (se abre en una pestaña nueva)"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={handleLinkedInClick}
              className={`${styles.btn} ${styles.btnLinkedIn}`}
              aria-label="LinkedIn (enlace temporalmente no disponible)"
            >
              LinkedIn
            </button>
            <a href="#proyectos" className={`${styles.btn} ${styles.btnProjects}`}>
              Ver proyectos
            </a>
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnCv}`}
              aria-label="Pedir CV en PDF (se abre en una pestaña nueva)"
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
              actions={[
                {
                  label: "Ver demo en vivo →",
                  url: "https://divilus-demo.vercel.app/",
                },
                {
                  label: "Ver repositorio demo →",
                  url: "https://github.com/c0ncerta/divilus-demo",
                },
              ]}
              problem="Soporte y gestion manuales consumian tiempo en comunidades activas."
              solution="Diseño de flujos de tickets y herramientas de moderacion anti-spam con comandos de administracion."
              impact="Menos trabajo manual del staff y trazabilidad de incidencias. Pendiente publicar demo publica."
            />

            <div className={styles.secondaryGrid}>
              <ProjectCard
                title="Bot de tickets y moderación"
                subtitle="Automatizacion de soporte para servidores de comunidad."
                stack="Node.js"
                statusText="Próximamente"
                problem="Los canales se saturaban y era dificil priorizar incidencias."
                solution="Sistema de creacion de tickets y comandos de control para spam, advertencias y acciones disciplinarias."
                impact="Flujo de soporte mas claro y tiempos de respuesta mas predecibles."
              />
              <ProjectCard
                title="Dotfiles / entorno de desarrollo"
                subtitle="Setup reproducible para desarrollo diario."
                stack="Shell · Editor · Git"
                actions={[
                  {
                    label: "Repositorio →",
                    url: "https://github.com/c0ncerta/.dotfiles",
                  },
                ]}
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
              "MongoDB",
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
            <a
              className={styles.link}
              href={`mailto:${emailAddress}`}
              onClick={handleEmailClick}
              aria-label={`${emailAddress}. Abre el cliente de correo y copia el email al portapapeles.`}
            >
              {emailAddress}
            </a>
            <a
              className={styles.link}
              href="https://github.com/c0ncerta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Ram Daod (se abre en una pestaña nueva)"
            >
              github.com/c0ncerta
            </a>
            <button
              type="button"
              className={`${styles.link} ${styles.linkButton}`}
              onClick={handleLinkedInClick}
              aria-label="LinkedIn (enlace temporalmente no disponible)"
            >
              linkedin.com/in/ram-daod/
            </button>
          </div>
        </footer>
      </div>
      {showLinkedInAlert ? (
        <div
          className={styles.linkedInAlert}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <p className={styles.linkedInAlertTitle}>Enlace no disponible</p>
          <p className={styles.linkedInAlertText}>
            Lo sentimos, pero no se puede acceder a este link por circunstancias
            fuera de nuestras capacidades.
          </p>
          <button
            type="button"
            className={styles.linkedInAlertClose}
            onClick={() => setShowLinkedInAlert(false)}
          >
            Cerrar
          </button>
        </div>
      ) : null}
      {showEmailCopiedToast ? (
        <div className={styles.emailCopiedToast} role="status" aria-live="polite">
          Email copiado al portapapeles
        </div>
      ) : null}
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
  actions?: ProjectAction[];
  statusText?: string;
};

type ProjectAction = {
  label: string;
  url: string;
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
        {props.actions?.length ? (
          <div className={styles.cardLinks}>
            {props.actions.map((action) => (
              <a
                key={`${props.title}-${action.url}`}
                className={styles.cardAction}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${action.label} (se abre en una pestaña nueva)`}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : (
          <span className={styles.muted}>{props.statusText ?? "Próximamente"}</span>
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
        {props.actions?.length ? (
          <div className={styles.cardLinks}>
            {props.actions.map((action) => (
              <a
                key={`${props.title}-${action.url}`}
                className={styles.cardAction}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${action.label} (se abre en una pestaña nueva)`}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : (
          <span className={styles.muted}>{props.statusText ?? "Próximamente"}</span>
        )}
      </div>
    </article>
  );
}
