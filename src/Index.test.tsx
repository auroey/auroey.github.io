import { act } from 'react';

import { configure, render, screen } from '@testing-library/react';

import '__mocks__/matchMedia';
import { App } from 'App/App';
import { AppProvider, reducer } from 'App/AppContext';
import { themes } from 'appearance';
import { Footer } from 'components';

configure({ testIdAttribute: 'data-v2' });

const mockState = {
  config: {
    name: { display: 'Default Name' },
    title: { display: 'Default Title' },
    affiliation: { display: 'Default Affiliation' },
    introduction: [],
    researchFocus: [],
    education: [],
    projects: [],
    publications: [],
    buttons: [
      {
        name: 'Default Button',
        display: 'Default Display',
        ariaLabel: 'Default Aria Label',
        href: '#',
      },
    ],
  },
  isMobile: false,
  theme: themes.light,
  setTheme: () => undefined,
};

describe('application tests', () => {
  beforeEach(async () => {
    await act(() => render(<App />));
  });

  /**
   * Check content element
   * @param {HTMLElement} element Element for the content
   * @param {RegExp} display Display value for the content
   * @param {string} link Optional link within the content
   */
  const checkContent = (
    element: HTMLElement,
    display: RegExp,
    link?: string,
    skipA11yNameCheck?: boolean,
  ) => {
    expect(element).toBeVisible();
    if (!skipA11yNameCheck) expect(element).toHaveAccessibleName();
    expect(element).toHaveTextContent(display);
    if (link) expect(element).toHaveAttribute('href', link);
  };

  /**
   * Check button element
   * @param {HTMLElement} parent Parent element for the button
   * @param {RegExp} display Display value for the button
   * @param {string} link Link within the button
   */
  const checkButton = (
    parent: HTMLElement,
    display: RegExp,
    link: string,
  ) => {
    expect(parent).toBeVisible();
    expect(parent).toHaveAccessibleName();
    expect(parent).toHaveTextContent(display);
    expect(parent).toHaveAttribute('href', link);
  };

  it('should render name: Xinrui Tang', () => {
    const element = screen.getByTestId('name');

    checkContent(element, /^Xinrui Tang$/, undefined, true);
  });

  it('should keep the hero concise', () => {
    expect(screen.getByText('Researcher of Computer Science')).toBeVisible();
    expect(screen.getByText('Zhejiang University · CAD&CG')).toBeVisible();
    expect(
      screen.queryByText('Generative models · Multimodal AI · World models'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Explore research and selected work')).not.toBeInTheDocument();
  });

  it('should render link to source code', () => {
    const element = screen.getByTestId('source');

    expect(element).toBeVisible();
    expect(element).toHaveAccessibleName('Homepage source code');
    expect(element).toHaveAttribute(
      'href',
      'https://github.com/auroey/auroey.github.io',
    );
  });

  it('should render verified projects and education', () => {
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeVisible();
    expect(screen.getByRole('link', { name: /IMVA/i })).toHaveAttribute(
      'href',
      'https://github.com/auroey/IMVA',
    );
    expect(screen.getByRole('heading', { name: 'Education' })).toBeVisible();
    expect(screen.getByText('Zhejiang University')).toBeVisible();
    expect(
      screen.getAllByText(
        "Master's Student in Big Data Technology and Engineering",
      ),
    ).toHaveLength(1);
    expect(screen.getByText('Sep 2026 – Present')).toBeVisible();
    expect(
      screen.getByRole('link', { name: 'Chunhua Shen (沈春华)' }),
    ).toHaveAttribute('href', 'https://cshen.github.io/');
    expect(
      screen.getByRole('link', {
        name: 'Zhiqiong Wang (王之琼) · Northeastern University',
      }),
    ).toHaveAttribute(
      'href',
      'https://www.bmie.neu.edu.cn/2021/0228/c8375a187369/pagem.htm',
    );
    expect(
      screen.getByRole('link', {
        name: 'Chao Li (李超) · University of Cambridge',
      }),
    ).toHaveAttribute('href', 'https://www.damtp.cam.ac.uk/person/cl647');
    expect(
      screen.getByRole('link', {
        name: 'Cheng Wei (魏程) · University of Dundee',
      }),
    ).toHaveAttribute('href', 'https://www.dundee.ac.uk/people/cheng-wei');
    expect(
      screen
        .getByText('University of Dundee')
        .closest('span')
        ?.parentElement,
    ).toContainElement(
      screen.getByRole('link', {
        name: 'Cheng Wei (魏程) · University of Dundee',
      }),
    );
    expect(
      screen
        .getByText('University of Dundee')
        .compareDocumentPosition(screen.getByText('Northeastern University')) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(screen.queryByText('Turtle Soup AI')).not.toBeInTheDocument();
  });

  it('should render the two verified publications', () => {
    expect(screen.getByRole('heading', { name: 'Publications' })).toBeVisible();
    expect(
      screen.getByRole('link', {
        name: /Hierarchical Brain Structure Modeling/i,
      }),
    ).toHaveAttribute('href', 'https://arxiv.org/abs/2508.09593');
    expect(
      screen.getByRole('link', {
        name: /Sex, Age, and Race Representation/i,
      }),
    ).toHaveAttribute('href', 'https://doi.org/10.1016/j.jelekin.2026.103218');
  });

  it('should omit redundant explanatory copy', () => {
    expect(screen.queryByText('Research portfolio')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About' })).toBeVisible();
    expect(
      screen.getByText(/intelligent systems that perceive, generate/i),
    ).toBeVisible();
    expect(
      screen.queryByText(/My research focuses on generative models/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('Research directions')).not.toBeInTheDocument();
    expect(screen.queryByText('Let’s connect.')).not.toBeInTheDocument();
  });

  it('should prioritize publications before projects and education', () => {
    const about = screen.getByRole('heading', { name: 'About' });
    const publications = screen.getByRole('heading', { name: 'Publications' });
    const projects = screen.getByRole('heading', { name: 'Projects' });
    const education = screen.getByRole('heading', { name: 'Education' });

    expect(
      about.compareDocumentPosition(publications) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      publications.compareDocumentPosition(projects) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      projects.compareDocumentPosition(education) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it('should render the verified contact email', () => {
    expect(
      screen.getByRole('link', {
        name: 'Email contact (opens in new window)',
      }),
    ).toHaveAttribute('href', 'mailto:xrt404@gmail.com');
  });

  it('should render GitHub button', () => {
    const parent = screen.getByTestId('button-GitHub');

    checkButton(parent, /^GitHub$/, 'https://github.com/auroey');
  });

  it('should render verified academic links', () => {
    expect(screen.getByTestId('button-Google Scholar')).toHaveAttribute(
      'href',
      'https://scholar.google.com/citations?user=f1FFPwYAAAAJ&hl=en',
    );
    expect(screen.getByTestId('button-X / Twitter')).toHaveAttribute(
      'href',
      'https://x.com/AuroeyWert',
    );
    expect(screen.getByTestId('button-Notes')).toHaveAttribute(
      'href',
      'https://auroey.github.io/web-digital-garden-ts/',
    );
    expect(screen.queryByTestId('button-Lab')).not.toBeInTheDocument();
  });

  it('should render LinkedIn button', () => {
    const parent = screen.getByTestId('button-LinkedIn');

    checkButton(
      parent,
      /^LinkedIn$/,
      'https://www.linkedin.com/in/kyle-tang-8a4752395',
    );
  });

  it('should render Email button', () => {
    const parent = screen.getByTestId('button-Email');

    checkButton(parent, /^Email$/, 'mailto:xrt404@gmail.com');
  });

  it('should render a light academic profile header', () => {
    expect(
      screen.getByRole('img', { name: 'Xinrui Tang portrait' }),
    ).toHaveAttribute(
      'src',
      '/images/xinrui-tang.jpg',
    );
    expect(screen.queryByTestId('toggle')).not.toBeInTheDocument();
  });

  it('should render full footer on desktop', () => {
    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent(/^© 2026 Xinrui Tang$/);
  });
});
describe('app context tests', () => {
  it('should render partial footer on mobile', async () => {
    await act(() =>
      render(
        <AppProvider
          config={mockState.config}
          isMobile={true}
          children={<Footer />}
        />,
      ),
    );

    // partial footer should now be visible
    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent(/^© 2026 Xinrui Tang$/);
  });

  describe('reducer tests', () => {
    it('should return the dark theme', () => {
      const state = reducer(mockState, { type: 'SET_THEME', value: 'dark' });

      expect(state).toEqual({ ...mockState, theme: themes.dark });
    });

    it('should return the light theme', () => {
      const state = reducer(mockState, { type: 'SET_THEME', value: 'light' });

      expect(state).toEqual({ ...mockState, theme: themes.light });
    });
  });
});
