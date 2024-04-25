import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hello from '../components/Hello';
import fetch from 'node-fetch';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>Mf1 test</div>
      <Hello />
    </>
  );
}

// interface UserData {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }

// export default function Home({ userData }) : {userData: UserData} {
//   return (
//     <div>
//       <Hello userData={userData} />
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//   const userData = await res.json();
//   return { props: { userData } };
// }