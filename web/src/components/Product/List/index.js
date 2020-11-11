
import './styles.css';
const Product = ()=>{
  return (
    <div className="product-list col-12">
      <div className="row">
        {/* Imagens */}
         <div className="col-3">

         <img src={'https://www.petlove.com.br/images/products/225261/product/2513331.jpg?1594219508'} className="img-fluid" alt="image product"/>
         </div>


          {/* Imagens */}

           <div className="col-6">

             <h6> 
               <label className="badge badge-primary"> R$ 30,00</label>
             </h6>
             <small>
               <b>Ração Seca Pedigree Carne, Frango e Cereais para Cães Adultos Raças Médias e Grandes</b>
             </small>
           </div>


           <div className="col-3"> 
            <button className="btn btn-secondary rounded-circle">-</button>
           </div>

         
        </div> 

    </div>
  )
}


export default Product;