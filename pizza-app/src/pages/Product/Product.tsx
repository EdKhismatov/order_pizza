import { Await, useLoaderData, useParams } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import { v4 as uuidv4 } from 'uuid';
import Headling from '../../components/Headling/Headling';
import styles from './Product.module.css';
import { cartActions } from '../../store/cart.slice';
import { useDispatch } from 'react-redux';

export default function Product() {
  // const data = useLoaderData() as { data: Product };
  const params = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch<AppDispath>();
  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(product.id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<Product>(
          `${PREFIX}/products/${params.id}`
        );
        setProduct(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Headling>{product.name}</Headling>
      <div className={styles['wrapper']}>
        <div>
          <img className={styles['image']} src={product.image} alt="пицца" />
        </div>
        <div className={styles['ritch']}>
          <div className={styles['pricec']}>
            <div className={styles['word']}>Цена</div>
            <div className={styles['price']}>
              {product.price}&nbsp;
              <span className={styles['currency']}>₽</span>
            </div>
          </div>
          <div className={styles['rat']}>
            <div className={styles['word']}>Рейтинг</div>
            <div className={styles['rating']}>
              {product.rating}&nbsp;
              <img src="/star-icon.svg" alt="избранное" />
            </div>
          </div>
          <div className={styles['ingredient']}>
            <div className={styles['sostav']}>Состав:</div>
            <div className={styles['arr']}>
              {product.ingredients?.map((el) => (
                <p key={uuidv4()}>- {el}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['buttons']}>
          <button className={styles['add-to-card']} onClick={add}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
        </div>
      </div>
    </>
    // <Suspense fallback={'Загружаю...'}>
    //   <Await resolve={data.data}>
    //     {({ data }: { data: Product }) => <>Product - {data.name}</>}
    //   </Await>
    // </Suspense>
  );
}
