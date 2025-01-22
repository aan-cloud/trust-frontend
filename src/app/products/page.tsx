'use client'

import { useSearchParams } from 'next/navigation';
import { ProductsList } from '@/components/pages/client/products';
import { useState, useEffect } from 'react';

export default function Products() {
  const searchParams = useSearchParams();
  const value = searchParams.get("value"); 

  const [name, setName] = useState(value);

  useEffect(() => {
    if (value !== name) {
      setName(value as string); // Perbarui state hanya jika berbeda
      console.log("State `name` diperbarui:", value);
    }
  }, [value, name]);

  return <ProductsList name={name as string}/>;
}
