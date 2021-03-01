import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountDown, 
    resetCountDown 
  } = useContext(CountdownContext);

  const [minutesLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [sencondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutesLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{sencondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      
      {hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton} 
        >
         <p>Ciclo encerrado</p>
          <img src="icons/check_circle.svg" alt="Check Circle"/>

      </button>
      ): (
        <>
          {isActive? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
            onClick={resetCountDown}>
            Abandonar ciclo
          </button> ): (
              <button 
              type="button" 
              className={styles.countdownButton} 
              onClick={startCountDown}>
            Iniciar um ciclo
          </button> 
          )}
        </>
      )}

    </div>
  )
}