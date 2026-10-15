import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const S = {
  Container: styled.div<{ $theme: Theme }>`
    position: relative;
    z-index: 1;
    width: min(1000px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 0 3rem 3rem;
    box-sizing: border-box;
    color: ${({ $theme }) => $theme.primaryTextColor};
    text-align: left;

    @media (max-width: 720px) {
      width: min(100% - 2rem, 1000px);
      padding: 0 0 2rem;
    }
  `,
  Section: styled.section<{ $theme: Theme }>`
    padding: 3.6rem 0;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};

    &:last-child {
      border-bottom: 0;
    }

    @media (max-width: 720px) {
      padding: 2.75rem 0;
    }
  `,
  Heading: styled.h2<{ $theme: Theme }>`
    margin: 0 0 1.6rem;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.025em;
  `,
  Intro: styled.p<{ $theme: Theme }>`
    max-width: 780px;
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-size: clamp(1.2rem, 2.3vw, 1.5rem);
    font-weight: 650;
    line-height: 1.55;
  `,
  List: styled.div<{ $theme: Theme }>`
    border-top: 1px solid ${({ $theme }) => $theme.borderColor};
  `,
  Publication: styled.a<{ $theme: Theme }>`
    display: grid;
    padding: 1.45rem 0;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
    color: ${({ $theme }) => $theme.primaryTextColor};
    grid-template-columns: 4.25rem minmax(0, 1fr) 1.5rem;
    align-items: start;
    gap: 1rem;
    text-decoration: none;

    &:hover strong,
    &:focus-visible strong {
      color: ${({ $theme }) => $theme.accentColor};
    }

    > span:first-child {
      color: ${({ $theme }) => $theme.accentColor};
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 0.95rem;
    }

    strong {
      display: block;
      font-size: 1.02rem;
      line-height: 1.45;
      transition: color 0.18s ease;
    }

    small {
      display: block;
      margin-top: 0.35rem;
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.84rem;
      line-height: 1.5;
    }

    > span:last-child {
      color: ${({ $theme }) => $theme.accentColor};
      font-size: 1rem;
    }

    @media (max-width: 560px) {
      grid-template-columns: 3.4rem minmax(0, 1fr);

      > span:last-child {
        display: none;
      }
    }
  `,
  Project: styled.a<{ $theme: Theme }>`
    display: grid;
    padding: 1.65rem 0;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
    color: ${({ $theme }) => $theme.primaryTextColor};
    grid-template-columns: minmax(10rem, 0.72fr) minmax(0, 1.5fr) 1.5rem;
    gap: 1.5rem;
    text-decoration: none;

    h3 {
      margin: 0;
      font-size: 1.05rem;
      line-height: 1.4;
    }

    p {
      margin: 0;
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.9rem;
      line-height: 1.6;
    }

    &:hover h3,
    &:focus-visible h3 {
      color: ${({ $theme }) => $theme.accentColor};
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr 1.25rem;

      > div {
        grid-column: 1;
      }

      > span {
        grid-column: 2;
        grid-row: 1;
      }
    }
  `,
  Tags: styled.div<{ $theme: Theme }>`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.55rem;
    color: ${({ $theme }) => $theme.accentColor};
    font-size: 0.73rem;
    font-weight: 650;
  `,
  Education: styled.div<{ $theme: Theme }>`
    display: grid;
    padding: 1.45rem 0;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
    grid-template-columns: 10.5rem minmax(0, 1fr);
    gap: 1.5rem;

    > span:first-child {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.82rem;
      font-weight: 650;
    }

    strong {
      display: block;
      margin-bottom: 0.2rem;
      font-size: 1rem;
    }

    small {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.88rem;
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  `,
};

export const ProfileSections = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <S.Container $theme={theme}>
      <S.Section id="about" $theme={theme}>
        <S.Heading $theme={theme}>About</S.Heading>
        <S.Intro $theme={theme}>{config.introduction[0]}</S.Intro>
      </S.Section>

      {config.publications.length > 0 && (
        <S.Section id="publications" $theme={theme}>
          <S.Heading $theme={theme}>Publications</S.Heading>
          <S.List $theme={theme}>
            {config.publications.map((publication) => {
              const year = publication.venue?.match(/\b20\d{2}\b/)?.[0] ?? '';

              return (
                <S.Publication
                  key={publication.title}
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  $theme={theme}
                >
                  <span>{year}</span>
                  <span>
                    <strong>{publication.title}</strong>
                    {publication.venue && <small>{publication.venue}</small>}
                  </span>
                  <span aria-hidden="true">↗</span>
                </S.Publication>
              );
            })}
          </S.List>
        </S.Section>
      )}

      <S.Section id="projects" $theme={theme}>
        <S.Heading $theme={theme}>Projects</S.Heading>
        <S.List $theme={theme}>
          {config.projects.map((project) => (
            <S.Project
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              $theme={theme}
            >
              <h3>{project.name}</h3>
              <div>
                <p>{project.description}</p>
                <S.Tags $theme={theme}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </S.Tags>
              </div>
              <span aria-hidden="true">↗</span>
            </S.Project>
          ))}
        </S.List>
      </S.Section>

      <S.Section id="education" $theme={theme}>
        <S.Heading $theme={theme}>Education</S.Heading>
        <S.List $theme={theme}>
          {config.education.map((item) => (
            <S.Education
              key={`${item.institution}-${item.period}`}
              $theme={theme}
            >
              <span>{item.period}</span>
              <span>
                <strong>{item.institution}</strong>
                <small>{item.detail}</small>
              </span>
            </S.Education>
          ))}
        </S.List>
      </S.Section>
    </S.Container>
  );
};
