import "./Products.css";

const Products = ({ productsData }) => {
  return (
    <div className="container">
      <div className="products">
        {productsData.map((product, index) => (
          <div key={index} className="product__card">
            <img src={product.img}/>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <span>{product.items}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
