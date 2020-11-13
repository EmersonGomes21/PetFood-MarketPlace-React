

import './styles.css';

const Product = ()=>{

  return (
   <div className="product col-3">
     <img  src="https://www.petlove.com.br/images/products/224978/product/Ra%C3%A7%C3%A3o_Seca_Pedigree_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_3104845.jpg?1593001910" className="img-fluid align-center"/>

     <button className="btn btn-primary rounded-circle">+</button>

     <h4>
       <label className="badge badge-primary">R$ 90,00</label>

       <small>
         <b>Ração Magnus Todo Dia Sabor Carne para Cães Adultos - 15 Kg</b>
       </small>
     </h4>
   </div>
  )
}

export default Product;