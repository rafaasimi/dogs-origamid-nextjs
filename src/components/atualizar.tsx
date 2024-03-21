'use client';

import {
  revalidatePathAction,
  revalidateTagAction,
} from '@/actions/revalidate-path';
import React from 'react';

export default function Atualizar() {
  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     revalidatePathAction('/client');
  //   }, 5000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  function handleClick() {
    // revalidatePathAction('/acoes');
    revalidateTagAction('acoes');
  }

  return <button onClick={handleClick}>Atualizar</button>;
}
