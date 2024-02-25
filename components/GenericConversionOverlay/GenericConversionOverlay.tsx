import { useEffect, useState } from 'react';
import DropDownComp from '../DropDownComp/DropDownComp';
import styles from './GenericConversionOverlay.module.css';
import { convertFahrenheitToCelsius } from '@/conversionalgos/temperature/fahrenheitcelsius';

import Image from 'next/image';
import arrowGraphic from '../../public/app/arrowicon.svg';
import ConversionDisplayContainer from './ConversionDisplayContainer/ConversionDisplayContainer';
import {
  AlgoMappingStateInfo,
  ConversionOverlayConfigurationType,
} from '@/models/Params';

interface GenericConversionOverlayCompProps {
  conversionPageConfig: ConversionOverlayConfigurationType;
}

const GenericConversionOverlayComp: React.FC<
  GenericConversionOverlayCompProps
> = (props) => {
  const { conversionPageConfig } = props;

  const [firstDropDownValue, setFirstDropDownValue] = useState(
    conversionPageConfig.defaultFrom
  );

  const [secondDropDownValue, setSecondDropDownValue] = useState(
    conversionPageConfig.defaultTo
  );

  const [selectedFromValue, setSelectedFromValue] = useState(
    conversionPageConfig.defaultFrom
  );

  const [selectedToValue, setSelectedToValue] = useState(
    conversionPageConfig.defaultTo
  );

  const [paramtersModified, setParametersModified] = useState<boolean>(false);

  const [algoMappingStateInfo, setAlgoMappingStateInfo] =
    useState<AlgoMappingStateInfo>();

  useEffect(() => {
    // on first page component load -- you need to bring up the algorithm and then propogate
    // that downwards

    const associatedAlgoMapping = conversionPageConfig.algoFromToMapping.find(
      (algoMapping) =>
        algoMapping.from === conversionPageConfig.defaultFrom &&
        algoMapping.to === conversionPageConfig.defaultTo
    );

    if (associatedAlgoMapping) {
      const initialMappingStateInfo: AlgoMappingStateInfo = {
        algo: associatedAlgoMapping.algo,
        fromDescriptionText: associatedAlgoMapping.fromDescriptionText,
        toDescriptionText: associatedAlgoMapping.toDescriptionText,
      };

      setAlgoMappingStateInfo({
        ...initialMappingStateInfo,
      });
    }
  }, []);

  const defaultAlgo = (num: number) => num;

  const handleSelectButtonClick = () => {
    const currentFirstDropdownValue = firstDropDownValue;
    const currentSecondDropdownValue = secondDropDownValue;

    // there needs to be a search iteratino somewhere in the array of config maps -- to get the write one --
    // and then update state accoridngly

    const associatedAlgoMapping = conversionPageConfig.algoFromToMapping.find(
      (algoMapping) =>
        algoMapping.from === currentFirstDropdownValue &&
        algoMapping.to === currentSecondDropdownValue
    );

    if (associatedAlgoMapping) {
      const initialMappingStateInfo: AlgoMappingStateInfo = {
        algo: associatedAlgoMapping.algo,
        fromDescriptionText: associatedAlgoMapping.fromDescriptionText,
        toDescriptionText: associatedAlgoMapping.toDescriptionText,
      };

      setAlgoMappingStateInfo({
        ...initialMappingStateInfo,
      });
    }

    setSelectedFromValue(currentFirstDropdownValue);
    setSelectedToValue(currentSecondDropdownValue);
    setParametersModified(false);
  };

  const handleFirstDropDownChange = (newValue: string) => {
    setFirstDropDownValue(newValue);
    setParametersModified(true);
  };

  const handleSecondDropDownChange = (newValue: string) => {
    setSecondDropDownValue(newValue);
    setParametersModified(true);
  };
  return (
    <>
      <div className={styles.genericMobileOverlayComp}>
        <div className={styles.mobileUpperSelectionContainer}>
          <DropDownComp
            dataCyOptionSelector='mobileOptionDropDown'
            dataCy={'topSelector'}
            onDropDownChange={handleFirstDropDownChange}
            currentValue={firstDropDownValue}
            availableValues={conversionPageConfig.availableFroms}
          ></DropDownComp>
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
          <DropDownComp
            dataCyOptionSelector='mobileOptionDropDown'
            dataCy={'bottomSelector'}
            onDropDownChange={handleSecondDropDownChange}
            currentValue={secondDropDownValue}
            availableValues={conversionPageConfig.availableTos}
          ></DropDownComp>
          <button
            data-cy={'mobileSelectButton'}
            onClick={handleSelectButtonClick}
            style={{
              marginRight: '0rem',
              marginTop: '3rem',
              backgroundColor: paramtersModified ? '#13394d' : 'white',
              color: paramtersModified ? 'white' : '#13394d',
              border: paramtersModified
                ? '1.5px solid transparent'
                : '1.5px solid #13394d',
            }}
            className={styles.selectButton}
          >
            Select
          </button>
        </div>
        <ConversionDisplayContainer
          isMobile
          selectedFromValue={selectedFromValue}
          selectedToValue={selectedToValue}
          descriptionFromValue={algoMappingStateInfo?.fromDescriptionText}
          descriptionToValue={algoMappingStateInfo?.toDescriptionText}
          algo={algoMappingStateInfo?.algo || defaultAlgo}
        ></ConversionDisplayContainer>
      </div>
      <div className={styles.genericConversionOverlayComp}>
        <div className={styles.upperSelectionContainer}>
          <div className={styles.leftContainerMaterial}>
            <DropDownComp
              dataCyOptionSelector='desktopOptionDropDown'
              dataCy={'leftSelector'}
              onDropDownChange={handleFirstDropDownChange}
              currentValue={firstDropDownValue}
              availableValues={conversionPageConfig.availableFroms}
            ></DropDownComp>
            <Image
              alt='arrow'
              style={{
                marginLeft: '2rem',
                marginRight: '2rem',
              }}
              src={arrowGraphic}
              height={25}
              width={25}
            ></Image>
            <DropDownComp
              dataCyOptionSelector='desktopOptionDropDown'
              dataCy={'rightSelector'}
              onDropDownChange={handleSecondDropDownChange}
              currentValue={secondDropDownValue}
              availableValues={conversionPageConfig.availableTos}
            ></DropDownComp>
          </div>
          <button
            data-cy={'desktopSelectButton'}
            style={{
              backgroundColor: paramtersModified ? '#13394d' : 'white',
              color: paramtersModified ? 'white' : '#13394d',
              border: paramtersModified
                ? '1.5px solid transparent'
                : '1.5px solid #13394d',
            }}
            onClick={handleSelectButtonClick}
            className={styles.selectButton}
          >
            Select
          </button>
        </div>
        <ConversionDisplayContainer
          selectedFromValue={selectedFromValue}
          selectedToValue={selectedToValue}
          descriptionFromValue={algoMappingStateInfo?.fromDescriptionText}
          descriptionToValue={algoMappingStateInfo?.toDescriptionText}
          algo={algoMappingStateInfo?.algo || defaultAlgo}
        ></ConversionDisplayContainer>
      </div>
    </>
  );
};

export default GenericConversionOverlayComp;
