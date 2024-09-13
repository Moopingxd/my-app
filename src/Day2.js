import React, { useEffect, useState } from "react";

//Functional Counter Component
const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

useEffect(() => {
  document.title = 'Func update ${count}'
})


  return (
    <div className="Counter">
      <h2>This is Functinal Counter</h2>
      <p>ຈຳນວນ: {count}</p>
      <button className= "add-btn"
      onClick={() => setCount(count+1)}>Count</button>
      <button className= "del-btn"
      onClick={() => {
        if(count !== 0) {
          setCount(count-1)
        }
      }
       }>Delete</button>
       <button
       className="Re-btn"
       onClick={() => setCount(0)}
      >Reset</button>
    </div>
  );
}

//class component
class Classcounter extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }
  componentDidUpdate (){
    document.tital = 'ຈຳນວນ ${this.state.count}';
  }
  render(){
    return (
      <div className="Counter">
        <h2>This is Class Counter</h2>
        <p>ຈຳນວນ: {this.state.count}</p>
        <button 
        onClick={() => {
          this.setState({
            count: this.state.count +1,
          })
        }}
        className="add-btn">ເພີ່ມ</button>
        <button 
        onClick={() => {
          if(this.state.count !== 0) {
            this.setState({
              count: this.state.count -1,
            })
          }

        }}
        className="del-btn">ລົບ</button>
      </div>
    );
  }
}

const BlongPost = (props) => {
  const [like, setLike] = useState(0);
  return (
    <div>
      <h1>{props.title}</h1>
      <p> This is content: {props.content} </p>
      <img 
      width={300}
      height={300}
      src="https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/437365954_271108039408658_931347690873128258_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Cz5VyISSLFgQ7kNvgEqNdRM&_nc_ht=scontent.fvte2-2.fna&oh=00_AYAM6mc-wEfpUMTIeAufmKqo3aKaje98b9aCi3abRHxOog&oe=66DC7C28">

      </img><br></br>
      <button
        onClick={() =>{
          setLike(like +1);
        }}
      >
        <img
       width={50}
      height={50}
      src="https://th.bing.com/th/id/OIP.fHko1PftcKjj3jd_HdjZhwHaGK?rs=1&pid=ImgDetMai" />
      </button>
      <h2>{like}</h2>
    </div>
  )
}
//Product Component
const ProductComp = (props) => {
  return (
    <div className="product-card">
      <p>Product {props.index}</p>
      <img
       className="product-main-img"
       src={props.productImg}>
      </img>
      <h1>{props.productTitle}</h1>
      <p>{props.productDesc}</p>
      <p>{props.productPrice}</p>
    </div>
  );
}
// Main Component
const Day2 = () => {
  const title = "TheFrame Studio";
  const content = "We are TheFrame studio the media production team";

  const productTitle = "Pre-Wedding Package";
  const productDesc = "Pre-wedding Studio service provide you with light studio photo backdrop or outdoor pre-wedding";
  const productImg = 'https://thesmartlocal.com/wp-content/uploads/2019/12/Pre-wedding-photoshoot-tips-for-couples-16.jpg';
  const productPrice = "150 USD";
  const productDetail = [
    {
      title: "Pre-Wedding Package",
      description: "Pre-wedding Studio service provide you with light studio photo backdrop or outdoor pre-wedding",
      img: 'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/428618136_1597660077476679_7762295178732828326_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=F80UTvzu7CwQ7kNvgEZZr7L&_nc_ht=scontent.fvte2-1.fna&oh=00_AYAJh4zcnaFFAcI0oBYksdIYor49LEfl3UvrEXyasKNnyQ&oe=66DCAC0D',
      price: "Price: 150 USD",
    },
    {
      title: "Portrait Package",
      description: "Portrait Profile in Studio or Outdoor with high resolution quality Photo for working",
      img: 'https://scontent.fvte2-2.fna.fbcdn.net/v/t39.30808-6/444480870_304276809425114_13928181132763154_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cHG66PVrwiMQ7kNvgEBek2c&_nc_ht=scontent.fvte2-2.fna&oh=00_AYDF-5QB32SkgHl8o6ij7Daq_tyZ7w-DZujgsp_uXIaIpA&oe=66DCB68A',
      price: "Price: 30 USD",
    },
    {
      title: "Wedding Photo Service",
      description: "Portrait Profile in Studio or Outdoor with high resolution quality Photo for working",
      img: 'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/421671320_1580824885826865_3695748539306573068_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6SrICiPN-ugQ7kNvgGpudYM&_nc_ht=scontent.fvte2-1.fna&oh=00_AYBs7UzKjyPk46pnLNd4zwJ3vDHKYEWHF54JBt0z3xbTsQ&oe=66DC9146',
      price: "Price: 200 USD",
    },
    {
      title: "Graduation Package",
      description: "Portrait Profile in Studio or Outdoor with high resolution quality Photo for working",
      img: 'https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/448120942_308501259002669_8463834386229794926_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nzOgDnSap10Q7kNvgEah7_K&_nc_ht=scontent.fvte2-3.fna&oh=00_AYBg1uIEU8J_A-q2RHyJj5fKGsMj8N9VUWcBpBUQKCrCiw&oe=66DCB27D',
      price: "Price: 150 USD",
    },
    {
      title: "Event Service",
      description: "Portrait Profile in Studio or Outdoor with high resolution quality Photo for working",
      img: 'https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/429480303_1604141893495164_5495220494792202456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=WIrjZtohhQ8Q7kNvgFb6bgv&_nc_ht=scontent.fvte2-1.fna&oh=00_AYCLnT2Pv9uScIiUe9qxuW35-yMxK16xzOyouFlO0MiG3w&oe=66DDA484',
      price: "Price: 150 USD",
    },
    {
      title: "Video Production",
      description: "Portrait Profile in Studio or Outdoor with high resolution quality Photo for working",
      img: 'https://cdn.mos.cms.futurecdn.net/to9QpPDhP8t4EkmFTjAysA-1200-80.jpg',
      price: "Price: 150 - 400 USD",
    },


  ]
  return (
    <div className="app">
        <h1>{title}</h1>
        <p>{content}</p>
    {productDetail.map((element, index) => (
        <ProductComp
      index ={index + 1}
      productDetail={productDetail}
      productTitle={element.title} 
      productDesc={element.description} 
      productImg={element.img}
      productPrice={element.price}
       ></ProductComp>
      ))}

   
      <FunctionalCounter/>
      <Classcounter/>
      <hr></hr>
      ສ້າງກາດບົດຄວາມຜູ້ຂຽນ, ຫົວຂໍ້, ເນື້ອຫາ ແລະ ປຸ່ມກົດໄລ້
     
      <BlongPost 
      title={title}
      content={content} />


      <style jsx>
        {
          `
          .app {
            max-width: 800px;
            margin:0 auto;
            padding: 20px;
            text-align: center;
          }
            .Counter {
            margin: 10px 0;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            background-color: #E8F5E9;
            }
          button {
          padding: 7px 15px;
          margin-right: 10px;
          front-size: 16px;
          
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
          }
          .add-btn{
          background-color: #43A047;
          }
          .del-btn{
          background-color: #E53935;
          }
          .Re-btn{
           background-color: #FDD835;
          }
           .product-card{
            margin: 10px 0;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            background-color: #E8F5E9;
            }
          .product-main-img{
          width: 100%
          }
          `}
      </style>
    </div>
  );
};

export default Day2;