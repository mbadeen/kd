import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { menuSelector } from '../../redux/selectors';
import Section from '../layout/Section';
import MealCard from '../layout/MealCard';
import { Meal } from '../../redux/state';
import getMenu from '../../redux/thunks';
import styles from './Menu.css';

const Menu: React.FC = (): JSX.Element => {
  const menu = useSelector(menuSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu());
  }, [dispatch]);

  return (
    <Section>
      <h1>Menu</h1>
      <article className={styles.article}>
        <h2>How it Works</h2>
        <p>
          How it works stuff goes here, I need a really long paragraph so I&#39;m going to sit here and try and try and
          try and try to type about nothing to fill up empty space for design purposes and such and so forth..
        </p>
      </article>
      {menu.length > 0
        ? menu.map(
            (meal: Meal): JSX.Element => (
              <MealCard
                key={meal.id}
                id={meal.id.toString()}
                name={meal.name}
                unitPrice={meal.unitPrice}
                description={meal.description}
                specialFlags={meal.specialFlags}
                specialRequests={meal.specialRequests}
              />
            )
          )
        : null}
    </Section>
  );
};

export default Menu;
