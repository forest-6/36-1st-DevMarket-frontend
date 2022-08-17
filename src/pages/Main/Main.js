import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);
  console.log(productList);

  useEffect(() => {
    fetch()
      .then(response => response.json())
      .then(result => setProductList(result));
  }, []);

  console.log(productList);
  return (
    <div className="mainContainer">
      <div className="innerContainer">
        <div className="filterNav">
          <div>
            총 <span>20</span> 개의 상품
          </div>
          <div className="filterNavBottom">
            <div>
              <input type="checkbox" className="check" />
              <span>든든배송</span>
            </div>
            <div className="filterButtons">
              <ul>
                <li>
                  <button>인기상품순</button>
                </li>
                <li>
                  <button>kg당 단가순</button>
                </li>
                <li>
                  <button>개당 단가순</button>
                </li>
                <li>
                  <button>낮은 가격순</button>
                </li>
              </ul>
              <button>필터</button>
            </div>
          </div>
        </div>
        <section className="productList">
          {productList.map(productInfo => {
            return <Product {...productInfo} key={productInfo.id} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Main;
