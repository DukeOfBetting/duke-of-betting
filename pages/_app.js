import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-bl from-[#1d3039] to-[#172329] h-screen w-screen text-[#dfe0db] overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
