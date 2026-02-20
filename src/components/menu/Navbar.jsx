
import React from 'react';

import MenuDinamico from './MenuDinamico';
import { getItemsMenu } from '@/lib/itemsMenu';

const Navbar = async ({ dict, lang }) => {

  //const items = await getItemsMenu(lang).then(res => res.json());
  const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/menu/prueba.php?lang=${lang}`, {
    cache: "no-store", // opcional, para evitar cache
  });
  const items = await res.json();
  return (
    <div >
      <MenuDinamico dict={dict} lang={lang} menu={items} />
    </div>
  );
};

export default Navbar;