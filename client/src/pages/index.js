import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <style jsx>{`.hey{
  color:red;
}}`}</style>
      <div>
        <Head>
          <title>Next js practise </title>
        </Head>
      </div>
      <p className="hey">nabin</p>
      <ul>
        <Link href="./">
          <li>home</li>
        </Link>{" "}
        <Link href="/contact">
          <li>contact</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>
      </ul>
    </div>
  );
}
