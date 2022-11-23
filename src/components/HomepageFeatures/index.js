import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({ message: 'Entirely free' }),
    Svg: require('@site/static/img/undraw_with_love.svg').default,
    description: (
      <>
        {translate({ message: "home.items.first" })}
      </>
    ),
  },
  {
    title: translate({ message: 'Entirely open source' }),
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        {translate({ message: "home.items.second" })}
      </>
    ),
  },
  {
    title: translate({ message: 'Entirely community-based' }),
    Svg: require('@site/static/img/undraw_coffee_with_friends.svg').default,
    description: (
      <>
        {translate({ message: "home.items.third" })}
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
