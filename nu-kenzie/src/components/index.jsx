import "./homeStyles.css";
import img from "../assets/illustration.png";

export const RenderHome = ({prop}) => {
  return (
    <div className="container">
             <div className="content">
        <div className="slogan">
          <h3>
            <span>Nu</span> Kenzie
          </h3>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={()=>prop(false)}>iniciar</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
 
    
  );
};



