import React from 'react'
import MenuItem from '../../forms/MenuItem'
import Legend from '../../layout/Legend'
import styles from './Menu.css'

const Menu: React.FC = (): JSX.Element => (
  <section className={styles.container}>
    <h1 className={styles.title}>Menu 07/04/2019</h1>
    <article className={styles.content}>
      <h2>How it Works</h2>
      <p>
        How it works stuff goes here, I need a really long paragraph so I&#39;m going to sit here and try and try and
        try and try to type about nothing to fill up empty space for design purposes and such and so forth..
      </p>
    </article>
    <Legend />
    <MenuItem
      name="Chicken"
      price="13"
      description="This is a description of the chicken dish, not sure what to put here because I am not a chef."
    />
  </section>
)

export default Menu
