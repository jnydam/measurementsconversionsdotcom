import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './ConversionDisplayContainer.module.css';
import Image from 'next/image';
import arrowGraphic from '../../../public/app/arrowicon.svg';

interface ConversionDisplayContainerProps {
  isMobile?: boolean;
  selectedFromValue: string;
  selectedToValue: string;
  descriptionFromValue?: string;
  descriptionToValue?: string;
  algo: (numValue: number) => number;
}

const ConversionDisplayContainer: React.FC<ConversionDisplayContainerProps> = (
  props
) => {
  const {
    algo,
    selectedFromValue,
    selectedToValue,
    descriptionFromValue,
    descriptionToValue,
  } = props;

  const [inputValue, setInputValue] = useState<string>('');
  const [rightValue, setRightValue] = useState<number>(NaN);
  const [isRightValueOverflowed, setIsRightValueOverflowed] = useState(false);
  const rightRef = useRef<HTMLSpanElement>(null);
  const rightRefMobile = useRef<HTMLSpanElement>(null);

  // if the selected from or to values change -- reset everything back to blank
  useEffect(() => {
    setInputValue('');
    setRightValue(NaN);
  }, [selectedFromValue, selectedToValue]);

  // if the right input is overflowig, send a visual aid to the user
  useEffect(() => {
    if (rightRef.current) {
      const clientWidth = rightRef.current.clientWidth;
      const scrollWidth = rightRef.current.scrollWidth;
      setIsRightValueOverflowed(scrollWidth > clientWidth);
    }

    if (rightRefMobile.current && props.isMobile) {
      const clientWidth = rightRefMobile.current.clientWidth;
      const scrollWidth = rightRefMobile.current.scrollWidth;
      setIsRightValueOverflowed(scrollWidth > clientWidth);
    }
  }, [rightValue]);

  const handleLeftInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const ouputtedValue = parseFloat(
      algo(parseFloat(event.target.value)).toFixed(6)
    );
    setInputValue(event.target.value);
    setRightValue(ouputtedValue);
  };
  return (
    <>
      <div className={styles.mobileConversionWrapper}>
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
          }}
        >
          {`${selectedFromValue} to ${selectedToValue}`}
        </span>
        <div className={styles.mobileConversionDisplayContainer}>
          <input
            data-cy={'mobileDataInput'}
            value={inputValue}
            style={{
              marginTop: '2rem',
            }}
            placeholder='Enter'
            onChange={handleLeftInputChange}
            type='number'
            className={styles.leftSideInput}
          ></input>
          <span
            className={styles.normalTextStyle}
            style={{
              marginTop: '1.5rem',
            }}
          >
            {descriptionFromValue ? descriptionFromValue : selectedFromValue}
          </span>
          <Image
            alt='arrow'
            style={{
              transform: 'rotate(90deg)',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
            src={arrowGraphic}
            height={25}
            width={25}
          ></Image>
          <span
            data-cy={'dataOutput'}
            style={{
              border: isRightValueOverflowed
                ? '1px solid #0296e2'
                : '1px solid transparent',
            }}
            ref={rightRefMobile}
            className={styles.rightSideNumberDisplay}
          >
            {!isNaN(rightValue) ? rightValue : '?'}{' '}
          </span>
          <span
            className={styles.normalTextStyle}
            style={{
              marginTop: '1.5rem',
            }}
          >
            {descriptionToValue ? descriptionToValue : selectedToValue}
          </span>
        </div>
      </div>
      <div className={styles.desktopConversionWrapper}>
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
          }}
        >
          {`${selectedFromValue} to ${selectedToValue}`}
        </span>
        <div className={styles.conversionDisplayContainer}>
          <div className={styles.leftSideEntryContainer}>
            <input
              data-cy={'desktopDataInput'}
              value={inputValue}
              placeholder='Enter'
              onChange={handleLeftInputChange}
              type='number'
              className={styles.leftSideInput}
            ></input>
            <span
              className={styles.normalTextStyle}
              style={{
                marginLeft: '1.5rem',
              }}
            >
              {descriptionFromValue ? descriptionFromValue : selectedFromValue}
            </span>
          </div>
          <span
            style={{
              fontSize: '3.5rem',
            }}
          >
            {' '}
            ={' '}
          </span>
          <div className={styles.rightSideEntryContainer}>
            <span
              data-cy={'dataOutput'}
              style={{
                marginLeft: '1.5rem',
                border: isRightValueOverflowed
                  ? '1px solid #0296e2'
                  : '1px solid transparent',
              }}
              ref={rightRef}
              className={styles.rightSideNumberDisplay}
            >
              {!isNaN(rightValue) ? rightValue : '?'}{' '}
            </span>
            <span
              style={{
                marginLeft: '1.5rem',
              }}
              className={styles.normalTextStyle}
            >
              {descriptionToValue ? descriptionToValue : selectedToValue}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversionDisplayContainer;
