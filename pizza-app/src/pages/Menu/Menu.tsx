import { ChangeEvent, useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu() {
  const [products, SetProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filtel, setFilter] = useState<string>();

  useEffect(() => {
    getMenu(filtel);
  }, [filtel]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`,{
        params: {
          name
        }
      });
      SetProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }
  };

  const apdateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <div className={styles['head']}>
        <Headling>Меню</Headling>
        <Search
          placeholder="Введите блюдо или состав"
          onChange={apdateFilter}
        />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты...</>}
        {!isLoading && products.length === 0 && <>Не найдено блюдо по запросу</>}
      </div>
    </>
  );
}

export default Menu;
