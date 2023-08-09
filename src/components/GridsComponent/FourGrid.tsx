import { FC, Fragment, useState } from 'react';
import { Splitter, SplitterOnChangeEvent } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { IFourGridProps } from './type';

const FourGrid: FC<IFourGridProps> = ({ grids }) => {
  const [panes, setPanes] = useState<Array<any>>([{}, {}]);

  const [firstNestedPanes, setFirstNestedPanes] = useState<Array<any>>([
    {
      size: '50%',
      min: '100px',
      resizable: true,
    },
    {},
  ]);
  const [secondNestedPanes, setSecondNestedPanes] = useState<Array<any>>([
    {
      size: '50%',
      min: '100px',
      resizable: true,
    },
    {},
  ]);

  const onChange = (event: SplitterOnChangeEvent) => {
    setPanes(event.newState);
  };

  const firstNestedPanesChange = (event: SplitterOnChangeEvent) => {
    setFirstNestedPanes(event.newState);
  };
  const secondNestedPanesChange = (event: SplitterOnChangeEvent) => {
    setSecondNestedPanes(event.newState);
  };

  return (
    <Splitter
      className="four-grid-splitter"
      panes={panes}
      onChange={onChange}
      orientation="vertical"
    >
      <Splitter
        panes={firstNestedPanes}
        onChange={firstNestedPanesChange}
        orientation="horizontal"
      >
        {grids.slice(0, 2).map((item, index) => (
          <Fragment key={index}>
            <GridComponent variant={item} />
          </Fragment>
        ))}
      </Splitter>
      <Splitter
        panes={secondNestedPanes}
        onChange={secondNestedPanesChange}
        orientation="horizontal"
      >
        {grids.slice(2, 4).map((item, index) => (
          <Fragment key={index}>
            <GridComponent variant={item} />
          </Fragment>
        ))}
      </Splitter>
    </Splitter>
  );
};
export default FourGrid;
