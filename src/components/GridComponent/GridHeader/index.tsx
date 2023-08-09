import { FC, Fragment, useState } from 'react';
import {
  // AppBar,
  AppBarSection,
  AppBarSpacer,
} from '@progress/kendo-react-layout';
import Button from '../../Button';
import { Separator } from '../GridComponent.styled';
import { useAppDispatch } from '../../../redux/hooks';
import { closeGrid } from '../../../redux/reducers/gridsSlice';
import { IGridHeaderProps } from './GridHeader.types';
import { StyledAppBar } from './GridHeader.styled';
import WindowCreateDialog from '../../WindowCreateDialog';

const GridHeader: FC<IGridHeaderProps> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const [openWindowDialog, setOpenWindowDialog] = useState<boolean>(false);

  const closeGridHandler = (): void => {
    dispatch(closeGrid(variant as string));
  };
  const openWindowHandler = () => {
    setOpenWindowDialog(true);
  };
  const closeWindowDlgHandler = () => {
    setOpenWindowDialog(false);
  };

  let title: string = '';
  switch (variant) {
    case 'accounts':
      title = 'Accounts';
      break;
    case 'bank_accounts':
      title = 'Bank Account Registers';
      break;
    case 'customers':
      title = 'Customers';
      break;
    case 'vendors':
      title = 'Vendors';
      break;
    case 'employees':
      title = 'Employees';
      break;
    default:
      title = '';
  }

  return (
    <Fragment>
      <StyledAppBar>
        {/* <AppBar className={styles.panel}> */}
        <AppBarSection>{title}</AppBarSection>
        <AppBarSpacer />
        <AppBarSection>
          <Button
            variant="icon-grid-btn"
            icon="plus"
            onClick={openWindowHandler}
          />
          <Separator />
          <Button
            variant="icon-grid-btn"
            icon="close"
            onClick={closeGridHandler}
          />
        </AppBarSection>
        {/* </AppBar> */}
      </StyledAppBar>
      {openWindowDialog && (
        <WindowCreateDialog
          variant={variant}
          closeWindowDlg={closeWindowDlgHandler}
        />
      )}
    </Fragment>
  );
};
export default GridHeader;
