import Header from '../../components/Header';
import Illustration from '../../assets/illustration.png';
function Cadastro() {
  return (
    <div className="container-fluid bg-primary ">

     <Header whiteVersion/>

        <div className="row">

        <div className="col-6  text-right my-auto">
        <img src={Illustration} alt="Illustration" className="img-fluid"/>
      </div>

      <div className="col-6 mb-4">

        <div className="box col-8 ">
          <h2 className="text-center title">Falta pouco pra fazer
o seu pet feliz.</h2>
       
        <input type="text" 
        className="
        form-control 
        form-control-lg mb-3"
        placeholder="Nome completo" 
        />


<input type="email" 
        className="
        form-control 
        form-control-lg mb-3"
        placeholder="E-mail" required
        />


<input type="text" 
        className="
        form-control 
        form-control-lg mb-3"
        placeholder="Telefone" 
        />


<input type="text" 
        className="
        form-control 
        form-control-lg mb-3"
        placeholder="CPF" 
        />


<input type="date" 
        className="
        form-control 
        form-control-lg mb-3"
        placeholder="Data de Nascimento" 
        />

        <button className="btn btn-lg btn-block btn-secondary">Finalizar Pedido</button>

        </div>
      </div>


        </div>
      </div>

    

  );
}

export default Cadastro;