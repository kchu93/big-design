import React from 'react';

import { StyledOrderedList, StyledUnorderedList } from './styled';
import { ListItem } from './Item';

export interface ListProps {
  columnCount?: number;
  columnGap?: number | string;
  ordered?: boolean;
  bulleted?: boolean;
}

export class List extends React.PureComponent<ListProps> {
  static defaultProps = {
    columnCount: 1,
    columnGap: 'normal',
    ordered: false,
    bulleted: true,
  };
  static Item = ListItem;

  render() {
    const { children, ordered } = this.props;
    const ElementType = ordered ? StyledOrderedList : StyledUnorderedList;

    return <ElementType {...this.props}>{children}</ElementType>;
  }
}
