import Link from 'next/link';
import styles from './OverviewCardComp.module.css';
import Image from 'next/image';
import { determineTrianglePath } from './OverviewCardCompUtil';
import { TriangleType } from '@/model/OverviewCardComp';
import { useSelector } from 'react-redux';
import { InnerRootStoreState } from '@/redux/store';

interface OverviewCardCompProps {
  hasMarginRight?: boolean;
  hasMarginLeft?: boolean;
  hasMarginBottom?: boolean;
  title: string;
  triangleType: TriangleType;
  imagePath: string;
  linkHref: string;
}

const OverviewCardComp: React.FC<OverviewCardCompProps> = (props) => {
  const trianglePath = determineTrianglePath(props.triangleType);
  const currentBreakpoint = useSelector(
    (state: InnerRootStoreState) => state.breakpointSliceReducer.breakpoint
  );

  return (
    <div
      data-cy={`overviewCard-${currentBreakpoint}`}
      style={{
        marginRight: props.hasMarginRight ? '4rem' : '0rem',
        marginLeft: props.hasMarginLeft ? '4rem' : '0rem',
        marginBottom: props.hasMarginBottom ? '3rem' : '0rem',
      }}
      className={styles.overviewCardCompStyles}
    >
      <Link
        style={{
          textDecoration: 'none',
          display: 'flex',
          color: 'black',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
        href={props.linkHref}
      >
        <div className={styles.centerImageContainer}>
          <Image
            src={props.imagePath}
            style={{
              transform: 'translateX(4)',
            }}
            width={50}
            height={50}
            alt={'triangleimage'}
          ></Image>
        </div>
        <div className={styles.triangleOverlayContainer}>
          <div className={styles.imageTriangleContainer}>
            <Image
              src={trianglePath}
              style={{
                transform: 'translateX(4)',
              }}
              width={50}
              height={50}
              alt={'triangleimage'}
            ></Image>
          </div>
        </div>
        <span
          style={{
            marginTop: '2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          }}
        >
          {props.title}
        </span>
      </Link>
    </div>
  );
};

export default OverviewCardComp;
