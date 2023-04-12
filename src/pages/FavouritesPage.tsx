import React from 'react';
import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.github);
  if (favourites.length === 0) {
    return <p className='text-center'>No items.</p>;
  }
  return (
    <ul className='d-flex justify-center py-10 mx-auto w-[560px] list-none'>
      {favourites.map((f) => (
        <li key={f} className='mb-2'>
          <a href={f} target='_blank' rel='noreferrer'>
            {f}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FavouritesPage;
