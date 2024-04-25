// components/Hello.tsx in Microfrontend 1
// Next.js page component
//import React from 'react';

// const Hello = ({ data }) => {
//   return <div>{JSON.stringify(data)}</div>;
// };

// export async function getServerSideProps(context) {
//   const res = await fetch('https://api.example.com/data');
//   const data = await res.json();

//   return { props: { data } }; // Pass data to the component as props
// }

// export default Hello;

export default function Hello() { return <div>Hello from mf1 and Matej third attempt</div>; }