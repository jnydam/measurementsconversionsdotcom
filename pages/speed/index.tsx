import styles from './index.module.css';
import Image from 'next/image';
import vectorImg from '../../public/app/vectorblur.png';
import GenericConversionOverlayComp from '@/components/GenericConversionOverlay/GenericConversionOverlay';
import { speedPageOverlayConfig } from '@/conversionconfigurations/speed';
import Head from 'next/head';

const SpeedPage: React.FC = () => {
  return (
    <div className={styles.speedPageOutline}>
      <Head>
        <title>Speed</title>
        <meta name='description' content='Convert speed measurements'></meta>
      </Head>
      <div className={styles.speedOuterOverlay}>
        <GenericConversionOverlayComp
          conversionPageConfig={speedPageOverlayConfig}
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

export default SpeedPage;
