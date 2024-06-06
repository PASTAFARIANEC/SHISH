// BurgerButton.tsx
import React, { useState } from 'react';


const BurgerButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBurger = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <button className={isOpen ? 'burger-button open' : 'burger-button'} onClick={toggleBurger}>
      <div />
      <div />
      <div />
    </button>
  )
}

export default BurgerButton;
