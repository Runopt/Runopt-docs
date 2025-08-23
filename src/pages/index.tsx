import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" style={{height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <Heading as="h1" className="hero__title" style={{marginBottom: '100px', fontSize: 'clamp(1.8rem, 5vw, 3rem)'}}>
          Runopt Documentation
        </Heading>
        <p className="hero__subtitle" style={{fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', marginBottom: '40px'}}>
          AI-powered software for land development
        </p>
        <p className="hero__description" style={{fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', marginBottom: '60px'}}>
          Transforming land development with an integrated design optimization tool, 
          delivering cost-effective, sustainable designs in minutes.
        </p>
        <div className={styles.buttons} style={{marginTop: '80px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <a
            className="button button--secondary button--lg"
            href="https://core.runopt.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{marginLeft: '1rem'}}>
            Go to Platform
          </a>
        </div>
      </div>
    </header>
  );
}

// HomepageFeatures component removed

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Runopt Documentation"
      description="AI-powered software for land development - Comprehensive documentation for Runopt's integrated design optimization tool">
      <HomepageHeader />
      <main style={{backgroundColor: '#1a1a1a'}}>
      </main>
    </Layout>
  );
}
