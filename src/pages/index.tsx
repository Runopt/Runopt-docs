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
      <div className="container" style={{minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
        <Heading as="h1" className="hero__title" style={{marginBottom: '50px'}}>
          Runopt Documentation
        </Heading>
        <p className="hero__subtitle">
          AI-powered software for land development
        </p>
        <p className="hero__description">
          Transforming land development with an integrated design optimization tool, 
          delivering cost-effective, sustainable designs in minutes.
        </p>
        <div className={styles.buttons} style={{marginTop: '50px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <a
            className="button button--outline button--lg"
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
        <section className={styles.quickLinks}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h3>Documentation</h3>
                <ul>
                  <li><Link to="/docs/getting-started/installation">Installation & Setup</Link></li>
                  <li><Link to="/docs/zoning-analysis/overview">Zoning Analysis</Link></li>
                  <li><Link to="/docs/core-product/real-estate-feasibility-analysis">Core Product</Link></li>
                </ul>
              </div>
              <div className="col col--6">
                <h3>Platform Access</h3>
                <ul>
                  <li><a href="https://core.runopt.co" target="_blank" rel="noopener noreferrer">Core Platform</a></li>
                  <li><a href="https://core.runopt.co/zoning-map" target="_blank" rel="noopener noreferrer">NYC Zoning App</a></li>
                  <li><a href="https://runopt.co" target="_blank" rel="noopener noreferrer">Landing Page</a></li>
                  <li><a href="mailto:support@runopt.co">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
