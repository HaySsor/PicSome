import styled from './photos-page.module.scss';
import {Image} from '../../components/image/image.component';
import {ItemsContext} from '../../context/ItemContext';
import {useContext} from 'react';
import {getClass} from '../../helper/getClass';

export const PhotosPage = () => {
  const {items, toggleIsFav, toggleCartItems} = useContext(ItemsContext);

  return (
    <main className={styled.photos}>
      {items.map((item, index) => {
        return (
          <Image
            key={item.id}
            addedClass={getClass(index)}
            toggleIsFav={toggleIsFav}
            item={item}
            toggleCartItems={toggleCartItems}
          />
        );
      })}
    </main>
  );
};
