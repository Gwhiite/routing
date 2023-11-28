import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleContact = () => {
    console.log("Contato enviado");
    return navigate("/");
  };

  return (
    <div>
      Exibindo mais informações do contado: {id}
      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  );
};

export default ContactDetails;
