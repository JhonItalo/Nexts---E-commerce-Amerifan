import Head from "next/head";
import { GetServerSideProps } from "next";
import DataProvider from "../contexts/DataCategoryProvider";
import { resolveListRequests } from "../request/TveVideoRequests";
import { pokemonInfo } from "../types/types";
import CategoryContent from "../content/categoryContent";

type props = {
     data: pokemonInfo[];
};

const TveVideo = ({ data }: props) => {
     console.log("telefonia render");
     return (
          <>
               <Head>
                    <title>Amerifan - Tv e Video</title>
                    <meta name="description" content="categoria de pokemons, filtragem de pokemons" />
               </Head>
               <main>
                    <DataProvider data={data}>
                         <CategoryContent name="tv e video" />
                    </DataProvider>
               </main>
          </>
     );
};

export default TveVideo;

export const getServerSideProps: GetServerSideProps = async () => {
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
