import OverviewCardRowComp from '@/components/OverviewCardRowComp/OverviewCardRowComp';
import styles from './index.module.css';
import { OverviewCardData } from '@/model/OverviewCardComp';
import { useSelector } from 'react-redux';
import { InnerRootStoreState } from '@/redux/store';
import OverviewCardComp from '@/components/OverviewCardComp/OverviewCardComp';
import Head from 'next/head';

const MainOverviewContainer: React.FC = () => {
  const currentBreakpoint = useSelector(
    (state: InnerRootStoreState) => state.breakpointSliceReducer.breakpoint
  );

  const firstRowCardData: OverviewCardData[] = [
    {
      title: 'Temperature',
      imagePath: '/app/temperatureicon.svg',
      linkHref: '/temperature',
      triangleType: 'darkblue',
    },
    {
      title: 'Speed',
      imagePath: '/app/speedometericon.svg',
      linkHref: '/speed',
      triangleType: 'mediumblue',
    },
    {
      title: 'Distance',
      linkHref: '/distance',
      imagePath: '/app/rulericon.svg',
      triangleType: 'lightblue',
    },
  ];
  const secondRowCardData: OverviewCardData[] = [
    {
      title: 'Cooking',
      imagePath: '/app/cookingicon.svg',
      linkHref: '/cooking',
      triangleType: 'darkblue',
    },
    {
      title: 'Time',
      imagePath: '/app/calendaricon.svg',
      linkHref: '/time',
      triangleType: 'mediumblue',
    },
  ];

  return (
    <div className={styles.mainOverviewContainerStyle}>
      <Head>
        <title>Measurements and Conversions</title>
        <meta name='description' content='Convert measurements'></meta>
      </Head>
      <div className={styles.overviewGridContainer}>
        <OverviewCardRowComp
          cardValues={firstRowCardData}
        ></OverviewCardRowComp>
        <OverviewCardRowComp
          cardValues={secondRowCardData}
        ></OverviewCardRowComp>
      </div>
      <div className={styles.mobileOverviewContainer}>
        {firstRowCardData.map((cardEntry, index) => (
          <OverviewCardComp
            hasMarginBottom
            triangleType={cardEntry.triangleType}
            key={index}
            linkHref={cardEntry.linkHref}
            title={cardEntry.title}
            imagePath={cardEntry.imagePath}
          ></OverviewCardComp>
        ))}
        {secondRowCardData.map((cardEntry, index) => (
          <OverviewCardComp
            hasMarginBottom
            triangleType={cardEntry.triangleType}
            key={index}
            linkHref={cardEntry.linkHref}
            title={cardEntry.title}
            imagePath={cardEntry.imagePath}
          ></OverviewCardComp>
        ))}
      </div>
    </div>
  );
};

export default MainOverviewContainer;
