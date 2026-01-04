import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>hello this is app</div>
      <Component {...pageProps} />
    </>
  );
}
