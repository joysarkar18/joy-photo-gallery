import Card from "./Componants/Card";
import NavBar from "./Componants/NavBar";

function App() {
  return (
    <div className="App bg-gray-900 ">
      <header className="App-header">

       <NavBar></NavBar>
       <div className="columns-1 md:columns-4 gap-3 p-5">
        <Card link="https://images.pexels.com/photos/14429453/pexels-photo-14429453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17504536/pexels-photo-17504536.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17436056/pexels-photo-17436056/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/16750660/pexels-photo-16750660/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17437252/pexels-photo-17437252/free-photo-of-wood-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/5661897/pexels-photo-5661897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17381993/pexels-photo-17381993/free-photo-of-love-summer-garden-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17504536/pexels-photo-17504536.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17436056/pexels-photo-17436056/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/16750660/pexels-photo-16750660/free-photo-of-sea-beach-vacation-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17437252/pexels-photo-17437252/free-photo-of-wood-fashion-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/5661897/pexels-photo-5661897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
        <Card link="https://images.pexels.com/photos/17381993/pexels-photo-17381993/free-photo-of-love-summer-garden-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></Card>
       

       </div>

      </header>
    </div>
  );
}

export default App;
