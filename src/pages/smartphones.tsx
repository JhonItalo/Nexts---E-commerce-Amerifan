import Head from "next/head";
import { GetStaticProps } from "next";
import ProductsByCategory from "../components/productsByCategory";
import DataProvider from "../contexts/DataProviderContext";
import { resolveListRequests } from "../request/SmarthphonesRequest";
type props = {
     data: any[];
};

const Smarthphone = ({ data }: props) => {
     console.log(data);
     return (
          <>
               <Head>
                    <title>Amerifan - smarthphones</title>
                    <meta name="description" content="Generated by create next app" />
               </Head>
               <main>
                    <DataProvider data={data}>
                         <ProductsByCategory />
                    </DataProvider>
               </main>
          </>
     );
};

export default Smarthphone;

export const getStaticProps: GetStaticProps = async () => {
     const { data, error } = await resolveListRequests();

     if (error) {
          return { notFound: true };
     }
     return {
          props: {
               data: data,
          },
     };
};
