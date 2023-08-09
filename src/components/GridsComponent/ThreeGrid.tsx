import { FC, Fragment, useState } from 'react';
import { Splitter, SplitterOnChangeEvent } from '@progress/kendo-react-layout';
import GridComponent from '../GridComponent';
import { IThreeGridProps } from './type';

const ThreeGrid: FC<IThreeGridProps> = ({ grids }) => {

  const [panes, setPanes] = useState<Array<any>>([{}, {}]);

  const [nestedPanes, setNestedPanes] = useState<Array<any>>([
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

  const onNestedChange = (event: SplitterOnChangeEvent) => {
    setNestedPanes(event.newState);
  };

  return (
    <Splitter
      panes={panes}
      onChange={onChange}
      orientation={'vertical'}
      className="three-grid-splitter"
    >
      <Splitter
        panes={nestedPanes}
        onChange={onNestedChange}
        orientation={'horizontal'}
      >
        {grids.slice(0, 2).map((item, index) => (
          <Fragment key={index}>
            <GridComponent variant={item} heightData={'100%'} />
          </Fragment>
        ))}
      </Splitter>
      {grids.slice(2, 3).map((item, index) => (
        <Fragment key={index}>
          <GridComponent variant={item} heightData={'100%'} />
        </Fragment>
      ))}
    </Splitter>
  );
};
export default ThreeGrid;
