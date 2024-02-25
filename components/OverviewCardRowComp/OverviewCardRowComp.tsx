import { OverviewCardData } from '@/model/OverviewCardComp';
import OverviewCardComp from '../OverviewCardComp/OverviewCardComp';
import styles from './OverviewCardRowComp.module.css';
import { useSelector } from 'react-redux';
import { InnerRootStoreState } from '@/redux/store';

interface OverviewCardRowCompProps {
  cardValues: OverviewCardData[];
}

const OverviewCardRowComp: React.FC<OverviewCardRowCompProps> = (props) => {
  const currentBreakpoint = useSelector(
    (state: InnerRootStoreState) => state.breakpointSliceReducer.breakpoint
  );

  return (
    <div className={styles.overviewCardRowCompContainer}>
      {props.cardValues.map((cardValueEntry, index) => (
        <OverviewCardComp
          triangleType={cardValueEntry.triangleType}
          key={index}
          linkHref={cardValueEntry.linkHref}
          hasMarginRight={index !== props.cardValues.length - 1}
          hasMarginLeft={index === 0}
          title={cardValueEntry.title}
          imagePath={cardValueEntry.imagePath}
        ></OverviewCardComp>
      ))}
    </div>
  );
};

export default OverviewCardRowComp;
