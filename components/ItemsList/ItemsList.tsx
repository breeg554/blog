import { ReactNode } from 'react';
import classNames from 'classnames';
import { ClassName } from '@/types';

interface ItemsListProps<T> extends ClassName {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export function ItemsList<T extends { id: string | number }>({
  items,
  renderItem,
  className,
}: ItemsListProps<T>) {
  return (
    <ul className={classNames(className)}>
      {items.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
