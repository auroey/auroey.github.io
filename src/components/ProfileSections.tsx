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
    padding: 0 0 8rem;
    text-align: left;
  `,
  Overview: styled.div<{ $theme: Theme }>`
    display: grid;
    margin: -2.75rem 0 1.5rem;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 16px;
    background: ${({ $theme }) => $theme.surfaceColor};
    box-shadow: 0 12px 36px ${({ $theme }) => $theme.shadowColor};
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 600px) {
      margin-top: -1.5rem;
      grid-template-columns: 1fr;
    }
  `,
  Stat: styled.div<{ $theme: Theme }>`
    padding: 1.6rem 1.8rem;

    & + & {
      border-left: 1px solid ${({ $theme }) => $theme.borderColor};
    }

    strong {
      display: block;
      margin-bottom: 0.2rem;
      color: ${({ $theme }) => $theme.primaryTextColor};
      font-size: 1.8rem;
      letter-spacing: -0.04em;
    }

    span {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 0.95rem;
    }

    @media (max-width: 600px) {
      & + & {
        border-top: 1px solid ${({ $theme }) => $theme.borderColor};
        border-left: 0;
      }
    }
  `,
  Section: styled.section<{ $theme: Theme }>`
    margin-top: 1.5rem;
    padding: 3rem;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 16px;
    background: ${({ $theme }) => $theme.surfaceColor};
    box-shadow: 0 12px 36px ${({ $theme }) => $theme.shadowColor};

    @media (max-width: 600px) {
      padding: 2rem;
    }
  `,
  SectionHeader: styled.div`
    display: flex;
    margin-bottom: 1.75rem;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
  `,
  Kicker: styled.span<{ $theme: Theme }>`
    color: ${({ $theme }) => $theme.accentColor};
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  `,
  Heading: styled.h2<{ $theme: Theme }>`
    margin: 0;
    color: ${({ $theme }) => $theme.primaryTextColor};
    font-size: 2.25rem;
    letter-spacing: -0.02em;
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
  AboutGrid: styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(16rem, 0.8fr);
    gap: 3rem;

    @media (max-width: 720px) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  `,
  FocusPanel: styled.aside<{ $theme: Theme }>`
    padding: 1.5rem;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 12px;
    background: ${({ $theme }) => $theme.accentMutedColor};

    h3 {
      margin: 0 0 1rem;
      color: ${({ $theme }) => $theme.primaryTextColor};
      font-size: 0.95rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    ol {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      display: grid;
      padding: 0.8rem 0;
      color: ${({ $theme }) => $theme.primaryTextColor};
      border-top: 1px solid ${({ $theme }) => $theme.borderColor};
      grid-template-columns: 2rem 1fr;
      font-size: 1.05rem;
      font-weight: 600;
    }

    li span {
      color: ${({ $theme }) => $theme.accentColor};
      font-size: 0.8rem;
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
    display: flex;
    min-height: 14rem;
    padding: 1.75rem;
    box-sizing: border-box;
    flex-direction: column;
    border-radius: 14px;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    color: ${({ $theme }) => $theme.primaryTextColor};
    text-decoration: none;
    background: ${({ $theme }) => $theme.surfaceColor};
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      border-color: ${({ $theme }) => $theme.accentColor};
      box-shadow: 0 8px 24px ${({ $theme }) => $theme.shadowColor};
    }

    h3 {
      margin: 0;
      font-size: 1.35rem;
    }

    p {
      margin: 0 0 1rem;
      color: ${({ $theme }) => $theme.secondaryTextColor};
      line-height: 1.6;
    }

    > div:last-child {
      margin-top: auto;
    }
  `,
  CardTop: styled.div<{ $theme: Theme }>`
    display: flex;
    margin-bottom: 0.85rem;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ $theme }) => $theme.accentColor};
      font-size: 1.25rem;
      transition: transform 0.2s ease;
    }
  `,
  CardMeta: styled.span<{ $theme: Theme }>`
    display: block;
    margin-bottom: 1rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  PublicationList: styled.div`
    display: grid;
    gap: 0.85rem;
  `,
  Publication: styled.a<{ $theme: Theme }>`
    display: grid;
    padding: 1.35rem 1.5rem;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    border-radius: 12px;
    color: ${({ $theme }) => $theme.primaryTextColor};
    background: ${({ $theme }) => $theme.surfaceColor};
    grid-template-columns: 2.5rem 1fr auto;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    transition:
      border-color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      border-color: ${({ $theme }) => $theme.accentColor};
      transform: translateX(3px);
    }

    > span:first-child {
      color: ${({ $theme }) => $theme.accentColor};
      font-size: 0.9rem;
      font-weight: 700;
    }

    strong {
      display: block;
      line-height: 1.45;
    }

    small {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      line-height: 1.5;
    }

    > span:last-child {
      color: ${({ $theme }) => $theme.accentColor};
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
      grid-template-columns: 2rem 1fr;

      > span:last-child {
        display: none;
      }
    }
  `,
  Timeline: styled.div`
    display: grid;
    gap: 0;
  `,
  Education: styled.div<{ $theme: Theme }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 0 1.75rem 2rem;
    color: ${({ $theme }) => $theme.secondaryTextColor};

    &::before {
      position: absolute;
      top: 0.35rem;
      bottom: 0;
      left: 0.35rem;
      width: 1px;
      background: ${({ $theme }) => $theme.borderColor};
      content: '';
    }

    &::after {
      position: absolute;
      top: 0.3rem;
      left: 0;
      width: 0.7rem;
      height: 0.7rem;
      border: 3px solid ${({ $theme }) => $theme.surfaceColor};
      border-radius: 50%;
      background: ${({ $theme }) => $theme.accentColor};
      box-shadow: 0 0 0 1px ${({ $theme }) => $theme.accentColor};
      content: '';
    }

    &:last-child::before {
      display: none;
    }

    strong {
      color: ${({ $theme }) => $theme.primaryTextColor};
    }

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `,
  Contact: styled.section<{ $theme: Theme }>`
    display: flex;
    margin-top: 1.5rem;
    padding: 2.5rem 3rem;
    border: 1px solid ${({ $theme }) => $theme.accentColor}55;
    border-radius: 16px;
    background: ${({ $theme }) => $theme.accentMutedColor};
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    p {
      margin: 0.35rem 0 0;
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-size: 1.05rem;
    }

    a {
      flex: 0 0 auto;
      padding: 1rem 1.25rem;
      border-radius: 10px;
      color: #ffffff;
      background: ${({ $theme }) => $theme.accentColor};
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      padding: 2rem;
      align-items: flex-start;
      flex-direction: column;
    }
  `,
};

export const ProfileSections = () => {
  const { config, theme } = useContext(AppContext);

  return (
    <S.Container>
      <S.Overview $theme={theme} aria-label="Portfolio overview">
        <S.Stat $theme={theme}>
          <strong>{String(config.researchFocus.length).padStart(2, '0')}</strong>
          <span>Research directions</span>
        </S.Stat>
        <S.Stat $theme={theme}>
          <strong>{String(config.publications.length).padStart(2, '0')}</strong>
          <span>Publications</span>
        </S.Stat>
        <S.Stat $theme={theme}>
          <strong>{String(config.projects.length).padStart(2, '0')}</strong>
          <span>Selected projects</span>
        </S.Stat>
      </S.Overview>

      <S.Section id="about" $theme={theme}>
        <S.SectionHeader>
          <S.Heading $theme={theme}>About</S.Heading>
          <S.Kicker $theme={theme}>01 · Profile</S.Kicker>
        </S.SectionHeader>
        <S.AboutGrid>
          <div>
            {config.introduction.map((paragraph) => (
              <S.Text key={paragraph} $theme={theme}>
                {paragraph}
              </S.Text>
            ))}
          </div>
          <S.FocusPanel $theme={theme}>
            <h3>Research focus</h3>
            <ol>
              {config.researchFocus.map((focus, index) => (
                <li key={focus}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {focus}
                </li>
              ))}
            </ol>
          </S.FocusPanel>
        </S.AboutGrid>
      </S.Section>

      {config.publications.length > 0 && (
        <S.Section id="publications" $theme={theme}>
          <S.SectionHeader>
            <S.Heading $theme={theme}>Publications</S.Heading>
            <S.Kicker $theme={theme}>02 · Research</S.Kicker>
          </S.SectionHeader>
          <S.PublicationList>
            {config.publications.map((publication, index) => (
              <S.Publication
                key={publication.title}
                href={publication.href}
                target="_blank"
                rel="noopener noreferrer"
                $theme={theme}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{publication.title}</strong>
                  {publication.venue && <small>{publication.venue}</small>}
                </span>
                <span aria-hidden="true">↗</span>
              </S.Publication>
            ))}
          </S.PublicationList>
        </S.Section>
      )}

      <S.Section id="projects" $theme={theme}>
        <S.SectionHeader>
          <S.Heading $theme={theme}>Selected projects</S.Heading>
          <S.Kicker $theme={theme}>03 · Building</S.Kicker>
        </S.SectionHeader>
        <S.Grid>
          {config.projects.map((project, index) => (
            <S.Card
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              $theme={theme}
            >
              <S.CardMeta $theme={theme}>
                Project {String(index + 1).padStart(2, '0')}
              </S.CardMeta>
              <S.CardTop $theme={theme}>
                <h3>{project.name}</h3>
                <span aria-hidden="true">↗</span>
              </S.CardTop>
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

      <S.Section id="education" $theme={theme}>
        <S.SectionHeader>
          <S.Heading $theme={theme}>Education</S.Heading>
          <S.Kicker $theme={theme}>04 · Background</S.Kicker>
        </S.SectionHeader>
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

      <S.Contact id="contact" $theme={theme}>
        <div>
          <S.Kicker $theme={theme}>Contact</S.Kicker>
          <S.Heading $theme={theme}>Let’s connect.</S.Heading>
          <p>Email is the simplest way to reach me.</p>
        </div>
        <a href="mailto:xrt404@gmail.com">xrt404@gmail.com</a>
      </S.Contact>
    </S.Container>
  );
};
