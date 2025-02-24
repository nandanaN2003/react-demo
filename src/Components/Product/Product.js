import "./product.css";


function Product({price,name,img,desc})
{
  return(
    <>
    <div className='Product'>
      <h1>{name}</h1>
      <img width='100px' src={img}/>
      <p>About : {desc}</p>
      <span>Price:</span><span>{price}</span>
      <br/>
      <button className='addToCart'>Add to cart</button>
    </div>
    </>

  );
}

export default Product;