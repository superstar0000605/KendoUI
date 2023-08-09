import { FC } from 'react';
import styles from './grids.module.scss';
import OneGrid from './OneGrid';
import TwoGrid from './TwoGrid';
import ThreeGrid from './ThreeGrid';
import FourGrid from './FourGrid';
import { useAppSelector } from '../../redux/hooks';

const GridsComponent: FC = () => {
  const currentPage = useAppSelector((state) => state.grids.currentPage);
  const selectedGrids = useAppSelector((state) => state.grids.selectedGrids);
 
  const index = (currentPage - 1) * 4;
  const pageGrids = selectedGrids.slice(index, index + 4);

  return (
    <section className={styles.container}>
      {pageGrids.length === 1 && <OneGrid grids={pageGrids} />}
      {pageGrids.length === 2 && <TwoGrid grids={pageGrids} />}
      {pageGrids.length === 3 && <ThreeGrid grids={pageGrids} />}
      {pageGrids.length === 4 && <FourGrid grids={pageGrids} />}
    </section>
  );
};
export default GridsComponent;
