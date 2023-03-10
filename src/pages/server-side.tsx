import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

import { Inter } from "@next/font/google";

import { gql } from "@apollo/client";
import client from "../graphql/apollo-client";

import Countries from "../components/Countries";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data,
    },
  };
};

export default function Home(props: any) {
  const { countries } = props;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            The data is fetched in the serverside, the html is created in the
            server and sent
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Countries countriesData={countries} />
      </main>
    </>
  );
}
