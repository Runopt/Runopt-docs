import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Runopt Docs',
  tagline: 'AI-powered software for land development',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.runopt.co',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Runopt', // Usually your GitHub org/user name.
  projectName: 'Runopt-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Runopt/Runopt-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Runopt/Runopt-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo-seo.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Runopt',
      logo: {
        alt: 'Runopt Logo',
        src: 'img/logo-optimized.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://runopt.co',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://core.runopt.co',
          label: 'Core Platform',
          position: 'right',
        },
        {
          href: 'https://github.com/Runopt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Zoning Analysis',
              to: '/docs/zoning-analysis/overview',
            },
            {
              label: 'Core Product',
              to: '/docs/core-product/real-estate-feasibility-analysis',
            },
          ],
        },
        {
          title: 'Platform',
          items: [
            {
              label: 'Core Platform',
              href: 'https://core.runopt.co',
            },
            {
              label: 'Landing Page',
              href: 'https://runopt.co',
            },
            {
              label: 'NYC Zoning App',
              href: 'https://core.runopt.co/zoning-map',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Runopt',
            },
            {
              label: 'Support',
              href: 'mailto:support@runopt.co',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Runopt. Built with Docusaurus.`,
    },
    prism: {
      // theme: prismThemes.github,
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // Add custom scripts
  scripts: [
    {
      src: '/js/navbar.js',
      async: true,
    },
  ],
};

export default config;
