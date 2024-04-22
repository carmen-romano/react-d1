// import logo from './logo.svg';
import logo from './airplane.png';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import DescriptionCard from './components/DescriptionCard';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <h1>React|D-1</h1>
      </header>
      <h2>Travel destination</h2>
      <div className="container-card">
      <ImageComponent src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chicago" content="Chicago, US" className="color-1"></ImageComponent>
      <ImageComponent src="https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Manhattan" content="Manhattan, US" className="color-2"></ImageComponent>
      <ImageComponent src="https://images.unsplash.com/photo-1512864733469-8c0d7cc3ccf5?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York"  content="New York, US" className="color-3"></ImageComponent>
      <ImageComponent src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="New York"  content="London, UK" className="color-4"></ImageComponent>
      <ImageComponent src="https://static1.bigstockphoto.com/3/9/2/large1500/293127583.jpg" alt="Seoul"  content="Seoul, KR" className="color-5"></ImageComponent>
      <ImageComponent src="https://img.freepik.com/premium-photo/vertical-japan-view-with-tokyo-tower-sunset_200188-25.jpg?w=360" alt="tokyo"  content="Tokyo, jp" className="color-6"></ImageComponent>
    </div>
    <ButtonComponent title="Scopri di più" className="btn"></ButtonComponent>

   <DescriptionCard title="Chicago" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." className="color-1"></DescriptionCard>
   <DescriptionCard title="Manhattan" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."className="color-2"></DescriptionCard>
   <DescriptionCard title="New York" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."className="color-3 "></DescriptionCard>
   <DescriptionCard title="London" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."className="color-4 "></DescriptionCard>
   <DescriptionCard title="Seoul" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."className="color-5 "></DescriptionCard>
   <DescriptionCard title="Tokyo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."className="color-6 "></DescriptionCard>
    </div>
    
  );
}

export default App;
