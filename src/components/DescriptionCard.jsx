import ButtonComponent from "./ButtonComponent";


let DescriptionCard = (props) => {
  return (
    <div className={"container-description " + props.className}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ButtonComponent title={props.title} className={"btn "+ props.className}></ButtonComponent>
    </div>
  );
}

export default DescriptionCard;
