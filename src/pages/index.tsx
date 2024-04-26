import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import  ProductType  from '../types/ProductInterface';
import Product from '../components/Product';
import styles from './home.module.css';

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://server-for-products.vercel.app/api/products')
  const {products} = await res.json();
  console.log(products);
  // Pass data to the page via props
  return { props: { products } }
}) satisfies GetServerSideProps<{ products: ProductType[] }>

export default function Home({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.products}>
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product}/>
      ))} 
    </div>
  );
}