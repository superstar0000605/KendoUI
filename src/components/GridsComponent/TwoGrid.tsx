import { FC, Fragment, useState } from 'react';
import { Splitter, SplitterOnChangeEvent } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { ITwoGridProps } from './type';

const TwoGrid: FC<ITwoGridProps> = ({ grids }) => {

  const [panes, setPanes] = useState<Array<any>>([
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

  return (
    <Splitter
      panes={panes}
      onChange={onChange}
      className="two-grid-splitter-container"
    >
      {grids.map((item, index) => (
        <Fragment key={index}>
          <GridComponent variant={item} heightData={'100%'} />
        </Fragment>
      ))}
    </Splitter>
  );
};
export default TwoGrid;
