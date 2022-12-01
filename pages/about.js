import Head from "next/head";

// import styles from "../styles/globals.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Flashcardo | About</title>
      </Head>
      <div className="text-center w-[95vw] mx-auto">
        <h1 className="font-bold text-2xl mb-2 mt-2">About Flashcardo</h1>
        <p>
          Flaschardo is a simple site that makes flashcards to help myself and
          hopefully others in studying.
        </p>
      </div>
    </>
  );
};

export default About;
