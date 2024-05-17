import styles from './Card.module.css';

interface Card {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const Card = ({ children, className, ...rest }: Card) => {
  let cardClassName = styles.card;
  if (className) {
    cardClassName = ` ${cardClassName} ${className} `;
  }

  const cardProps = {
    className: cardClassName,
    ...rest,
  };
  return <div {...cardProps}>{children}</div>;
};

export default Card;
