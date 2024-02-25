import { ReactNode, useEffect } from 'react';
import styles from './layout.module.css';
import { useRouter } from 'next/router';
import { exportedActionObject as breakpointActions } from '@/redux/slices/breakpointSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { InnerRootStoreState } from '@/redux/store';
import whiteArrowImageGraphic from '../public/app/whitearrowicon.svg';
import Image from 'next/image';
import { determineBodyPageTitle } from './LayoutUtil';

interface ChildrenProps {
  children: ReactNode;
}

const Layout: React.FC<ChildrenProps> = (props) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const currentBreakpoint = useSelector(
    (state: InnerRootStoreState) => state.breakpointSliceReducer.breakpoint
  );

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 1150px)');

    dispatch(
      breakpointActions.actions.changeBreakpoint(
        window.innerWidth <= 1150 ? 'mobile' : 'desktop'
      )
    );

    const mediaQueryChangeHandler = () => {
      if (mobileMediaQuery.matches) {
        dispatch(breakpointActions.actions.changeBreakpoint('mobile'));
      } else {
        dispatch(breakpointActions.actions.changeBreakpoint('desktop'));
      }
    };

    mobileMediaQuery.addEventListener('change', mediaQueryChangeHandler);

    return () => {
      mobileMediaQuery.removeEventListener('change', mediaQueryChangeHandler);
    };
  }, []);

  const handleBackNavigation = () => {
    router.push('/');
  };

  return (
    <div className={styles.mainContainer}>
      <header className={styles.upperHeaderStyle}>
        {router.pathname !== '/' && (
          <Image
            data-cy={'backButton'}
            onClick={handleBackNavigation}
            alt='back white arrow'
            height={30}
            width={30}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              left: 0,
              marginLeft: '1.5rem',
              transform: 'rotate(180deg)',
            }}
            src={whiteArrowImageGraphic}
          ></Image>
        )}
        <span
          style={{
            fontSize: '1.5rem',
            color: '#FFFFFF',
            // fontWeight: 'regular',
          }}
        >
          {determineBodyPageTitle(router.pathname)}
        </span>
        {/* {currentBreakpoint === 'desktop' &&
         (
          <span
            style={{
              position: 'absolute',
              right: 0,
              color: 'white',
              marginRight: '1.5rem',
            }}
          >{`(support@measurementsandconversions.com)`}</span>
        )
        } */}
      </header>
      {props.children}
    </div>
  );
};

export default Layout;
