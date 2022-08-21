import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Header from "./header/Header";
import Goods from "./Goods";

const headerData = {
  site_name: "my test site name",
  nav: [
    { link: "nav1", text: "my link" },
    { link: "nav2", text: "my link2" },
    { link: "nav3", text: "my link3" },
  ],
};

const goods = [
  {
    title: "apple",
    cost: 330,
    image:
      "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_maca-256.png",
  },
  {
    title: "pear",
    cost: 530,
    image:
      "https://cdn3.iconfinder.com/data/icons/fruits-52/150/icon_fruit_pera-256.png",
  },
];

function App() {
  return (
    <>
      <Header data={headerData} />
      <Test />
      {goods.map((item) => (
        <Goods
          key={item.title}
          title={item.title}
          cost={item.cost}
          image={item.image}
        />
      ))}
    </>
  );
}

export default App;

// const listItem = data.map((item) => (
//   <li key={item.link}>
//     <a href={item.link}>{item.text}</a>
//   </li>
// ));
