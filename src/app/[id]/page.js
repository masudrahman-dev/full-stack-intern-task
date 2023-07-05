import data from "@/data";

const singleCard = ({ params }) => {
  const item = data.find((item) => item.id === parseInt(params.id));
  console.log(item);
  return (
    <div className="border">
      <h1>{item.name}</h1>
      <h2>price Rs: {item.price}</h2>
      <h2>Item id: {item.id}</h2>
    </div>
  );
};

export default singleCard;
