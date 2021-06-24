import NavBar from "./NavBar";

function App() {
  return (
    <div id="home-div">
      <NavBar backgroundColor="transparent" textColor="white" />
      <article id="tagline-article">
        <h1 id="main-tagline">SPARK UP YOUR STYLE</h1>
        <p id="sub-tagline">Add glamor to your clothing, jewelry, and electronic collections.</p>
        <div id="tagline-btn-offset-border">
          <button id="tagline-btn">SHOP NOW</button>
        </div>
      </article>
    </div>
  );
}

export default App;