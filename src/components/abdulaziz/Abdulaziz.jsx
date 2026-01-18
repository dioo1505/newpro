import "./Abdulaziz.css";
import figma from "./abdulaziz/img/figma.jpg";
import matrial from "./abdulaziz/img/matrial.jpg";
import zamok from "./abdulaziz/img/zamok.jpg";

function Card({ img, tag, color, title, text }) {
  return (
    <div className="card">
      <img src={img} alt={title} />

      <span className={`badge ${color}`}>
        {tag}
      </span>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Banner({ data }) {
  return (
    <div className="banner">  
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          tag={item.tag}
          color={item.color}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default function Abdulaziz() {
  const data = [
    {
      img: {},
      tag: "Статья",
      color: "red",
      title: "Тракторная молния зевлюс Deluxe",
      text: "Сверхточная тракторная молния с усиленной фиксацией."
    },
    {
      img: "/img/2.jpg",
      tag: "События",
      color: "blue",
      title: "Универсальное крепление на текстильный пуллер",
      text: "Идеально подходит для различных типов одежды."
    },
    {
      img: "/img/3.jpg",
      tag: "Новости",
      color: "green",
      title: "Текстильный пуллер «камуфляж»",
      text: "Современный дизайн и высокая износостойкость."
    },
    {
      img: "/img/4.jpg",
      tag: "Новости",
      color: "green",
      title: "Текстильный пуллер «камуфляж»",
      text: "Подходит для спортивной va sayohat kiyimlari."
    },
    {
      img: "/img/5.jpg",
      tag: "События",
      color: "blue",
      title: "Универсальное крепление на текстильный пуллер",
      text: "O‘rnatish oson va mustahkam."
    },
    {
      img: "/img/6.jpg",
      tag: "Статья",
      color: "red",
      title: "Тракторная молния зевлюс Deluxe",
      text: "Yuqori sifat va uzoq xizmat muddati."
    }
  ];

  return (
    <section className="container">
      <h2>Статьи, события, новости</h2>
      <Banner data={data} />
    </section>
  );
}
