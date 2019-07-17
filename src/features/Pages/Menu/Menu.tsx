import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MenuCard from '../../forms/MenuCard'
import Legend from '../../layout/Legend'
import { MenuItem, State } from '../../../redux/state'
import { getMenu } from '../../../redux/actions/menuActions'
import styles from './Menu.css'

const Menu: React.FC = (): JSX.Element => {
  const menu = useSelector((state: State) => state.menu)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  return (
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
      {menu.map((menuItem: MenuItem) => (
        <MenuCard key={menuItem.id} name={menuItem.name} price={menuItem.price} description={menuItem.description} />
      ))}
    </section>
  )
}

export default Menu
