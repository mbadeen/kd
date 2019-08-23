import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MealCard from '../layout/MealCard'
import { Meal, State } from '../../redux/state'
import getMenu from '../../redux/thunks'
import styles from './Menu.css'

const Menu: React.FC = (): JSX.Element => {
  const menu = useSelector((state: State) => state.menu)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  return (
    <section className={styles.section}>
      <h1>Menu</h1>
      <h2>07/04/2019</h2>
      <article className={styles.article}>
        <h2>How it Works</h2>
        <p>
          How it works stuff goes here, I need a really long paragraph so I&#39;m going to sit here and try and try and
          try and try to type about nothing to fill up empty space for design purposes and such and so forth..
        </p>
      </article>
      {menu.length > 0
        ? menu.map((meal: Meal) => {
            return (
              <MealCard
                key={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                specialFlags={meal.specialFlags}
                specialRequests={meal.specialRequests}
              />
            )
          })
        : null}
    </section>
  )
}

export default Menu
