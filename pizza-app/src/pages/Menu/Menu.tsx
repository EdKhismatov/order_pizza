import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <>
      <div className={styles['head']}>
        <Headling>Меню</Headling>
        <Search placeholder="Введите блюдо или состав" />
      </div>
      <div>
        <ProductCard
          id={1}
          title="Наслаждение"
          description="Садями, руккола, помидоры, оливки"
          rating={4.5}
          price={300}
          image='/product-demo.png'
        />
      </div>
    </>
  );
}
