import { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from 'App/AppContext';
import { Theme } from 'types';

const S = {
  Container: styled.div`
    position: relative;
    z-index: 1;
    width: min(1040px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 1rem 0 8rem;
    text-align: left;
  `,
  Section: styled.section<{ $theme: Theme }>`
    margin-top: 2rem;
    padding: 2.5rem;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 16px;
    background: ${({ $theme }) => $theme.surfaceColor};
    box-shadow: 0 12px 36px ${({ $theme }) => $theme.shadowColor};
  `,
  Heading: styled.h2<{ $theme: Theme }>`
    margin: 0 0 1.25rem;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-size: 2rem;
    letter-spacing: -0.02em;

    &::after {
      display: block;
      width: 2.5rem;
      height: 3px;
      margin-top: 0.65rem;
      border-radius: 99px;
      background: ${({ $theme }) => $theme.accentColor};
      content: '';
    }
  `,
  Text: styled.p<{ $theme: Theme }>`
    margin: 0.75rem 0;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    font-size: 1.2rem;
    line-height: 1.8;

    a {
      color: ${({ $theme }) => $theme.accentColor};
      text-decoration-color: ${({ $theme }) => $theme.accentColor}70;
      text-underline-offset: 0.2em;
    }

    a:hover {
      text-decoration-color: ${({ $theme }) => $theme.accentColor};
    }
  `,
  Tags: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  `,
  Tag: styled.span<{ $theme: Theme }>`
    padding: 0.55rem 0.85rem;
    border-radius: 999px;
    color: ${({ $theme }) => $theme.accentColor};
    border: 1px solid ${({ $theme }) => $theme.accentColor}35;
    background: ${({ $theme }) => $theme.accentMutedColor};
    font-size: 0.95rem;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  `,
  Card: styled.a<{ $theme: Theme }>`
    display: block;
    padding: 1.4rem;
    border-radius: 14px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    color: ${({ $theme }) => $theme.primaryTextColor};
    text-decoration: none;
    background: ${({ $theme }) => $theme.surfaceColor};
    transition:
      transform 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      border-color: ${({ $theme }) => $theme.accentColor};
      box-shadow: 0 8px 24px ${({ $theme }) => $theme.shadowColor};
    }

    h3 {
      margin: 0 0 0.6rem;
      font-size: 1.25rem;
    }

    p {
      margin: 0 0 1rem;
      color: ${({ $theme }) => $theme.secondaryTextColor};
      line-height: 1.6;
    }
  `,
  Timeline: styled.div`
    display: grid;
    gap: 1rem;
  `,
  Education: styled.div<{ $theme: Theme }>`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ $theme }) => $theme.borderColor};
    color: ${({ $theme }) => $theme.secondaryTextColor};

    strong {
      color: ${({ $theme }) => $theme.primaryTextColor};
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `,
};

export const ProfileSections = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <S.Container>
      <S.Section id="about" $theme={theme}>
        <S.Heading $theme={theme}>About</S.Heading>
        {config.introduction.map((paragraph) => (
          <S.Text key={paragraph} $theme={theme}>
            {paragraph}
          </S.Text>
        ))}
        <S.Tags>
          {config.researchFocus.map((focus) => (
            <S.Tag key={focus} $theme={theme}>
              {focus}
            </S.Tag>
          ))}
        </S.Tags>
      </S.Section>

      <S.Section id="projects" $theme={theme}>
        <S.Heading $theme={theme}>Selected projects</S.Heading>
        <S.Grid>
          {config.projects.map((project) => (
            <S.Card
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              $theme={theme}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <S.Tags>
                {project.tags.map((tag) => (
                  <S.Tag key={tag} $theme={theme}>
                    {tag}
                  </S.Tag>
                ))}
              </S.Tags>
            </S.Card>
          ))}
        </S.Grid>
      </S.Section>

      {config.publications.length > 0 && (
        <S.Section id="publications" $theme={theme}>
          <S.Heading $theme={theme}>Publications</S.Heading>
          {config.publications.map((publication) => (
            <S.Text key={publication.title} $theme={theme}>
              {publication.href ? (
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
              {publication.venue ? ` — ${publication.venue}` : ''}
            </S.Text>
          ))}
        </S.Section>
      )}

      <S.Section id="education" $theme={theme}>
        <S.Heading $theme={theme}>Education</S.Heading>
        <S.Timeline>
          {config.education.map((item) => (
            <S.Education
              key={`${item.institution}-${item.period}`}
              $theme={theme}
            >
              <span>
                <strong>{item.institution}</strong>
                <br />
                {item.detail}
              </span>
              <span>{item.period}</span>
            </S.Education>
          ))}
        </S.Timeline>
      </S.Section>
    </S.Container>
  );
};
