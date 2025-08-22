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
      <div className="container">
        <Heading as="h1" className="hero__title">
          Runopt Documentation
        </Heading>
        <p className="hero__subtitle">
          AI-powered software for land development
        </p>
        <p className="hero__description">
          Transforming land development with an integrated design optimization tool, 
          delivering cost-effective, sustainable designs in minutes.
        </p>
        <div className={styles.buttons}>
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

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className="text--center padding-horiz--md">
              <h2>Transform Land Development</h2>
              <p>
                Runopt delivers cost-effective, sustainable designs in minutes through 
                AI-powered analysis and integrated design optimization.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className="text--left padding-horiz--md">
              <h3>🗺️ Zoning Tools for Site Analysis</h3>
              {/* <p>
                Let Runopt handle the zoning complexities while you focus on innovative design. 
                Use natural language to ask AI for interpretations of local zoning regulations, 
                get instant compliance checks, and explore interactive zoning maps.
              </p> */}
            </div>
          </div>
          <div className="col col--6">
            <div className="text--left padding-horiz--md">
              <h3>📊 Data-Driven Feasibility Insights</h3>
              {/* <p>
                Make smarter site decisions with fast, accurate feasibility checks. 
                Confidently explore multiple design scenarios to maximize site potential 
                and reduce costly guesswork in early-stage decision making.
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className="text--left padding-horiz--md">
              <h3>📋 Customizable Reports for Non-Engineers</h3>
              {/* <p>
                Translate complex civil design data into clear, accessible insights. 
                Simplify technical details for real estate teams and stakeholders, 
                bridging the knowledge gap for more productive conversations.
              </p> */}
            </div>
          </div>
          <div className="col col--6">
            <div className="text--left padding-horiz--md">
              <h3>🏗️ Optimized Grading and Drainage Design</h3>
              {/* <p>
                Experience cutting-edge civil design with up to 30% reduction in design time. 
                Minimize environmental impact with smart earthwork management and unlock 
                synergies between variables for better outcomes.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Runopt Documentation"
      description="AI-powered software for land development - Comprehensive documentation for Runopt's integrated design optimization tool">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
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
