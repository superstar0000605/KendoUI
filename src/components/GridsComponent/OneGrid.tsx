import { FC, Fragment } from 'react';
import GridComponent from '../GridComponent';
import styles from './grids.module.scss';
import { IOneGridProps } from './type';

const OneGrid: FC<IOneGridProps> = ({grids}) => {

  return (
    <div className={styles.oneGrid}>
      {grids.map((item, index) => (
        <Fragment key={index}>
          <GridComponent variant={item} />
        </Fragment>
      ))}
    </div>
  );
};
export default OneGrid;
