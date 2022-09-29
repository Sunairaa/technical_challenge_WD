// import logo from "../logo.svg";
import "../App.css";
import PhoneList from "../components/PhoneList";
import PhoneDetail from "../components//PhoneDetail";

function HomePage() {
  return (
    <div className="App">
      <PhoneList></PhoneList>
      <PhoneDetail></PhoneDetail>
    </div>
  );
}

export default HomePage;
