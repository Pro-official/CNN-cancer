import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../App/components/Banner";
import Feature from "../App/components/Feature";
import TypesOfCancer from "../App/components/TypesOfCancer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cancer Prediction</title>
        <meta
          name="description"
          content="Cancer prediction from machine and deep learning code"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
        <Feature />
        <TypesOfCancer />
      </main>
    </div>
  );
}
