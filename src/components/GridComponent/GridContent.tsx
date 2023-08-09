import React, { FC, useState, useRef, useEffect, RefObject } from 'react';
import {
  Grid,
  GridColumn,
  GridSortChangeEvent,
  GridRowDoubleClickEvent,
  getSelectedState,
  GridSelectionChangeEvent,
} from '@progress/kendo-react-grid';
import { getter } from '@progress/kendo-react-common';
import { Popup } from '@progress/kendo-react-popup';
import { Menu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import {
  orderBy,
  filterBy,
  SortDescriptor,
  CompositeFilterDescriptor,
} from '@progress/kendo-data-query';
import clsx from 'clsx';
import styles from './grid.module.scss';
import {
  accountsGridTemplate,
  bankAccountsGridTemplate,
  customersGridTemplate,
  vendorsGridData,
  employeesGridData,
} from './gridDataTemplate';
import { IGridContentProps } from './types';
import useOnClickOutside from '../../hooks/useClickOutside';
import WindowEditDialog from '../WindowEditDialog';

type TDataCellObj = {
  field: string;
  value: string;
};

const GridContent: FC<IGridContentProps> = ({
  variant,
  heightData,
  gridData,
}) => {

  const initialSort: Array<SortDescriptor> = [];

  const initialFilter: CompositeFilterDescriptor = {
    logic: 'or',
    // filters: [],
    filters: [
      { field: 'AccountName', operator: 'contains', value: 'Office Expense' },
      // { field: "", operator: 'contains', value: '' },
    ],
  };

  const [result, setResult] = useState({
    data: gridData,
    total: gridData.length,
  });
  // Open Edit Diallog
  const [openWindowEditDialog, setOpenWindowEditDialog] =
    useState<boolean>(false);
  // Selected Row by Double Click
  const [selectedRow, setSelectedRow] = useState<object>({});
  // Context Menu
  const [openContextMenu, setOpenContextMenu] = useState<boolean>(false);
  const [dataCellObj, setDataCellObj] = useState<TDataCellObj>({
    field: '',
    value: '',
  });
  // Sorting, Filtering
  const [sort, setSort] = useState(initialSort);
  const [filter, setFilter] =
    useState<CompositeFilterDescriptor>(initialFilter);
  // Select Row func
  const DATA_ITEM_KEY = 'IDNo';
  const SELECTED_FIELD = 'selected';
  const idGetter = getter(DATA_ITEM_KEY);

  const [selectedState, setSelectedState] = useState<{
    [id: string]: boolean | number[];
  }>({});

  useEffect(() => {
    setResult({
      data: orderBy(gridData, sort),
      total: orderBy(gridData, sort).length,
    });
  }, [sort, gridData]);

  let gridDataTemplate: any;
  switch (variant) {
    case 'accounts':
      gridDataTemplate = accountsGridTemplate;
      break;
    case 'bank_accounts':
      gridDataTemplate = bankAccountsGridTemplate;
      break;
    case 'customers':
      gridDataTemplate = customersGridTemplate;
      break;
    case 'vendors':
      gridDataTemplate = vendorsGridData;
      break;
    case 'employees':
      gridDataTemplate = employeesGridData;
      break;
    default:
      gridDataTemplate = [];
  }

  const offset = useRef({
    left: 0,
    top: 0,
  });

  const menuWrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuWrapperRef, () => setOpenContextMenu(false));

  const rowRender = (
    trElement: React.ReactElement<HTMLTableRowElement>,
    dataItem: any
  ) => {
    const trProps = {
      ...trElement.props,
      onContextMenu: (e: React.MouseEvent) => {
        e.preventDefault();
        handleContextMenuOpen(e, dataItem.dataItem);
        setSelectedState({});
      },
    };
    return React.cloneElement(
      trElement,
      { ...trProps },
      //@ts-ignore
      trElement.props.children
    );
  };

  const handleContextMenuOpen = (e: React.MouseEvent, dataItem: any) => {
    e.preventDefault();
    const cellContent = (e.target as HTMLElement).innerHTML;
    const dataItemKeys = Object.keys(dataItem);

    for (let i = 0; i <= dataItemKeys.length - 1; i++) {
      if (dataItem[dataItemKeys[i]] === cellContent) {
        setDataCellObj({
          field: dataItemKeys[i],
          value: cellContent,
        });
      }
    }

    offset.current = { left: e.clientX, top: e.clientY };
    setOpenContextMenu(true);
  };

  const onPopupOpen = () => {
    //@ts-ignore
    menuWrapperRef?.current?.querySelector('[tabindex]')?.focus();
  };

  const handleSortAscending = () => {
    const newSort: Array<SortDescriptor> = [
      { field: dataCellObj.field, dir: 'asc' },
    ];

    setSort(newSort);
    setResult({
      data: orderBy(gridData, sort),
      total: orderBy(gridData, sort).length,
    });
  };

  const handleSortDescending = () => {
    const newSort: Array<SortDescriptor> = [
      { field: dataCellObj.field, dir: 'desc' },
    ];
    setSort(newSort);
    setResult({
      data: orderBy(gridData, sort),
      total: orderBy(gridData, sort).length,
    });
  };

  const handleFilterInSelected = () => {
    const newFilter: CompositeFilterDescriptor = {
      logic: 'or',
      filters: [
        {
          field: dataCellObj.field,
          operator: 'contains',
          value: dataCellObj.value,
        },
      ],
    };
    setFilter(newFilter);
    setResult({
      data: filterBy(gridData, newFilter as CompositeFilterDescriptor),
      total: filterBy(gridData, newFilter as CompositeFilterDescriptor).length,
    });
  };

  const handleFilterOutSelected = () => {
    const newFilter: CompositeFilterDescriptor = {
      logic: 'or',
      filters: [
        {
          field: dataCellObj.field,
          operator: 'doesnotcontain',
          value: dataCellObj.value,
        },
      ],
    };
    setFilter(newFilter);
    setResult({
      data: filterBy(gridData, newFilter as CompositeFilterDescriptor),
      total: filterBy(gridData, newFilter as CompositeFilterDescriptor).length,
    });
  };
  const handleRemoveAllFilters = () => {
    setSort([]);
    setFilter({
      logic: 'and',
      filters: [],
    });
    setResult({
      data: gridData,
      total: gridData.length,
    });
  };

  const handleOnSelect = (e: MenuSelectEvent) => {
    switch (e.item.text) {
      case 'Sort Ascending':
        handleSortAscending();
        break;
      case 'Sort Descending':
        handleSortDescending();
        break;
      case 'Filter In Selected':
        handleFilterInSelected();
        break;
      case 'Filter Out Selected':
        handleFilterOutSelected();
        break;
      case 'Remove All Filters':
        handleRemoveAllFilters();
        break;
      default:
    }
    setOpenContextMenu(false);
  };

  // Select Row functionality
  const onSelectionChange = (event: GridSelectionChangeEvent) => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY,
    });
    setSelectedState(newSelectedState);
  };

  const rowDoubleClickHandler = (e: GridRowDoubleClickEvent): void => {
    setSelectedRow(e.dataItem);
    setOpenWindowEditDialog(true);
  };

  return (
    <React.Fragment>
      <Popup
        offset={offset.current}
        show={openContextMenu}
        onOpen={onPopupOpen}
        popupClass={'popup-content'}
      >
        <div
          tabIndex={-1}
          ref={menuWrapperRef}
          className={styles.contextMenuBlock}
        >
          <Menu
            vertical={true}
            style={{ display: 'inline-block' }}
            onSelect={handleOnSelect}
          >
            <MenuItem text="Sort Ascending" />
            <MenuItem text="Sort Descending" />
            <MenuItem text="Filter In Selected" />
            <MenuItem text="Filter Out Selected" />
            <MenuItem text="Remove All Filters" />
          </Menu>
        </div>
      </Popup>
      <Grid
        style={{
          height: heightData,
        }}
        className={clsx('grid-block', styles.gridBlock)}
        data={result.data.map((item: any) => ({
          ...item,
          [SELECTED_FIELD]: selectedState[idGetter(item)],
        }))}
        filter={filter}
        sort={sort}
        sortable={true}
        selectedField={SELECTED_FIELD}
        selectable={{
          enabled: true,
          mode: 'single',
        }}
        rowRender={rowRender}
        onSortChange={(e: GridSortChangeEvent) => {
          setSort(e.sort);
        }}
        onSelectionChange={onSelectionChange}
        onRowDoubleClick={rowDoubleClickHandler}
      >
        {gridDataTemplate.map((item: any, index: number) => (
          <GridColumn
            key={index}
            className={clsx(styles.column, item.classNameStyle)}
            title={item.title}
            field={item.field}
            width={item.width}
          />
        ))}
      </Grid>
      <div
        className={styles.numberItemsBlock}
        onClick={() => setSelectedState({})}
      >
        <p>{result.total}</p>
      </div>
      {openWindowEditDialog ? (
        <WindowEditDialog
          id={(selectedRow as any).IDNo}
          variant={variant}
          closeWindowDlg={() => setOpenWindowEditDialog(false)}
        />
      ) : null}
    </React.Fragment>
  );
};
export default GridContent;
