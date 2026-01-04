export const getServerSideProps = async () => {
  return {
    props: {
      name: "nabin karki",
    },
  };
};

export default function Nabin({ name }) {
  console.log("props from getServerSideProps:", { name });
  return <h1>{name}</h1>;
}
