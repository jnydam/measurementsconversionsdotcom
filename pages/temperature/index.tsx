import styles from './index.module.css';
import Image from 'next/image';
import vectorImg from '../../public/app/vectorblur.png';
import GenericConversionOverlayComp from '@/components/GenericConversionOverlay/GenericConversionOverlay';
import { convertCelsiusToFahrenheit } from '@/conversionalgos/temperature/fahrenheitcelsius';
import Head from 'next/head';
import { temperaturePageOverlayConfig } from '@/conversionconfigurations/temperature';

const TemperaturePage: React.FC = () => {
  const dummyConfiguration = {
    availableFroms: [''],
    availableTos: [''],
    algoFromToMapping: [
      {
        from: 'Celsius',
        to: 'Fahrenheit',
        descriptionSameAsLabel: false,
        fromDescriptionText: 'degrees Celsius',
        toDescriptionText: 'degrees Fahrenheit',
        algo: convertCelsiusToFahrenheit,
      },
    ],
  };
  return (
    <div className={styles.temperaturePageOutline}>
      <Head>
        <title>Temperature</title>
        <meta
          name='description'
          content='Convert temperature measurements'
        ></meta>
      </Head>
      <div className={styles.temperatureOuterOverlay}>
        <GenericConversionOverlayComp
          conversionPageConfig={temperaturePageOverlayConfig}
        ></GenericConversionOverlayComp>
      </div>
      <div className={styles.lowerImageRectContainer}>
        <Image
          alt='blue blur'
          src={vectorImg}
          fill
          priority
          style={{
            objectFit: 'cover',
            userSelect: 'none',
            transform: 'translateY(1rem)',
            width: '100%',
          }}
        ></Image>
      </div>
    </div>
  );
};

export default TemperaturePage;
