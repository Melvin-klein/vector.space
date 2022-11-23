import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Entirely free',
    Svg: require('@site/static/img/undraw_with_love.svg').default,
    description: (
      <>
        All the courses and resources you will find on Math Directory are free
        of charge. Take full advantage of it!
      </>
    ),
  },
  {
    title: 'Entirely open source',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        The Math Directory website and all its contents are accessible and
        modifiable on Github
      </>
    ),
  },
  {
    title: 'Entirely community-based',
    Svg: require('@site/static/img/undraw_coffee_with_friends.svg').default,
    description: (
      <>
        The website, courses and learning resources are created and maintained
        by the community. Join us!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
