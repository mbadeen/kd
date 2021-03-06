import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import addToCart from '../../redux/actions/cartActionCreators';
import Checkbox from '../inputs/Checkbox';
import Quantity from '../buttons/Quantity';
import MealFlag from './MealFlag';
import PrimaryButton from '../buttons/PrimaryButton';
import { handleFlagMatch } from '../../util/functions';
import { SpecialFlag, SpecialRequest } from '../../redux/state';

import styles from './MealCard.css';

interface Props {
  description: string;
  id: string;
  name: string;
  specialFlags: SpecialFlag[];
  specialRequests: SpecialRequest[];
  unitPrice: number;
}

const MealCard: React.FC<Props> = ({
  description,
  id,
  name,
  specialFlags,
  specialRequests,
  unitPrice
}: Props): JSX.Element => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(0);
  const [options, setOptions] = useState<SpecialRequest[]>([]);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          {name}
          <span className={styles.price}>{unitPrice}</span>
        </h3>
        <ul className={styles.flags}>
          {specialFlags.map(
            (specialFlag: SpecialFlag): JSX.Element => (
              <MealFlag
                key={specialFlag.id}
                description={specialFlag.flag}
                src={handleFlagMatch(specialFlag.flag)}
                alt={specialFlag.flag}
              />
            )
          )}
        </ul>
      </header>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        {specialRequests.length !== 0 ? (
          <div className={styles.options}>
            {specialRequests.map(
              (specialRequest: SpecialRequest): JSX.Element => (
                <Checkbox
                  checked={!!options.find(option => option.label === specialRequest.label)}
                  htmlFor={specialRequest.label}
                  id={specialRequest.label}
                  key={specialRequest.id}
                  name={specialRequest.label}
                  //   onChange={event =>
                  //     setOptions(
                  //       event.currentTarget.checked
                  //         ? [
                  //             ...options,
                  //             {
                  //               id: specialRequest.id,
                  //               label: event.currentTarget.name,
                  //               unitPrice: specialRequest.unitPrice
                  //             }
                  //           ]
                  //         : options.filter(option => event.currentTarget.name !== option.label)
                  //     )
                  //   }
                  onChange={() =>
                    setOptions((prevOptions: SpecialRequest[]) =>
                      !prevOptions.find((option: SpecialRequest) => option.label === specialRequest.label)
                        ? [
                            ...prevOptions,
                            {
                              id: specialRequest.id,
                              label: specialRequest.label,
                              unitPrice: specialRequest.unitPrice
                            }
                          ].sort((a, b) => a.id - b.id)
                        : prevOptions.filter((option: SpecialRequest) => specialRequest.label !== option.label)
                    )
                  }
                >
                  {specialRequest.label} {specialRequest.unitPrice}
                </Checkbox>
              )
            )}
          </div>
        ) : null}
        <div className={styles.buttons}>
          <Quantity setQuantity={setQuantity} value={quantity} lowerBoundary={0} upperBoundary={10} />
          <PrimaryButton
            text="Add to Cart"
            onClick={() => {
              dispatch(
                addToCart({
                  name,
                  id: `${id}${options.reduce((accumulator, currentValue) => `${accumulator}${currentValue.id}`, '')}`,
                  unitPrice,
                  quantity,
                  options
                })
              );
              setQuantity(0);
              setOptions([]);
            }}
            disabled={quantity === 0}
          />
        </div>
      </footer>
    </article>
  );
};

export default MealCard;
