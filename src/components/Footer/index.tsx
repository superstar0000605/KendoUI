import { FC } from 'react';
import clsx from 'clsx';
// import { v4 as uuidv4 } from 'uuid';
import styles from './footer.module.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setCurrentPage } from '../../redux/reducers/gridsSlice';

const Footer: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.grids.currentPage);
  const selectedGrids = useAppSelector((state) => state.grids.selectedGrids);

  const pages = Math.ceil(selectedGrids.length / 4);
  const pagesArr = Array.from({ length: pages }, (_, i) => i + 1);

  const previosPageHandler = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };
  const nextPageHandler = () => {
    if (currentPage !== pages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };
  // const selectPageHandler = (num: number) => {
  //   dispatch(setCurrentPage(num));
  // };

  return (
    <section className={styles.container}>
      <div className={styles.paginationBlock}>
        {pagesArr.length ? (
          <button className={styles.Btn} onClick={previosPageHandler}>
            <span
              className={clsx(
                'k-icon k-icon-md k-i-arrow-chevron-left',
                styles.arrow,
                currentPage === 1 && styles.disabled
              )}
            />
          </button>
        ) : null}

        {pagesArr.length ? (
          <button className={styles.page}>{currentPage}</button>
        ) : null}

        {/* {pagesArr.map((item) => (
          <button
            key={uuidv4()}
            className={clsx(
              styles.page,
              currentPage === item && styles.activePage
            )}
            onClick={() => selectPageHandler(item)}
          >
            {item}
          </button>
        ))} */}

        {pagesArr.length ? (
          <button className={styles.Btn} onClick={nextPageHandler}>
            <span
              className={clsx(
                'k-icon k-icon-md k-i-arrow-chevron-right',
                styles.arrow,
                currentPage === pages && styles.disabled
              )}
            />
          </button>
        ) : null}
      </div>
    </section>
  );
};
export default Footer;
