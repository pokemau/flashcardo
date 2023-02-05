import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Flashcardo | About</title>
      </Head>
      <div className="text-center w-[95vw] mx-auto">
        <h1 className="font-bold text-2xl mb-2 mt-2">About Flashcardo</h1>
        <p>Make flashcards to study :)</p>

        <div className="flex justify-center mt-6 space-x-2">
          <Link href="https://github.com/pokemau" target="_blank">
            <Image
              src="/images/github-icon.png"
              height={40}
              width={40}
              className="hover:scale-105"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mauricetaneca/"
            target="_blank">
            <Image
              src="/images/linkedin-icon.png"
              height={40}
              width={40}
              className="hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
