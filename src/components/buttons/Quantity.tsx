import React from 'react';
import { removeNonDigits, convertStringToNumber, handleQuantityBoundaries } from '../../util/functions';
import styles from './Quantity.css';

interface Props {
  lowerBoundary: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  upperBoundary: number;
  value: number;
}

const Quantity: React.FC<Props> = ({ lowerBoundary, setQuantity, upperBoundary, value }: Props): JSX.Element => (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      onClick={() => setQuantity(handleQuantityBoundaries(value - 1, lowerBoundary, upperBoundary))}
    >
      -
    </button>
    <input
      type="text"
      className={styles.input}
      value={value}
      onChange={event =>
        setQuantity(
          handleQuantityBoundaries(
            convertStringToNumber(removeNonDigits(event.target.value)),
            lowerBoundary,
            upperBoundary
          )
        )
      }
    />
    <button
      type="button"
      className={styles.button}
      onClick={() => setQuantity(handleQuantityBoundaries(value + 1, lowerBoundary, upperBoundary))}
    >
      +
    </button>
  </div>
);

export default Quantity;
