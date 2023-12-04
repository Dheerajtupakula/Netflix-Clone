import Row from "./Row";
import MovieApi from "./MovieApi";
import Banner from "./Banner";
import Nav from "./Nav";
import "./netflix_clone/App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div>
        <div className="App">
          <Row
            title={"Netflix Orginals"}
            content={MovieApi.NetflixOrginals}
            isLargeRow={true}
          />
        </div>
        <div className="App-row">
          <Row title={"Trendings"} content={MovieApi.Trending} />
        </div>
        <div className="App">
          <Row title={"Top Rated"} content={MovieApi.movies} />
        </div>
        <div className="App">
          <Row title={"Action Movies"} content={MovieApi.ActionMovies} />
        </div>
        <div className="App">
          <Row title={"Horror Movies"} content={MovieApi.horrorMovies} />
        </div>
        <div className="App">
          <Row title={"Comedy Movies"} content={MovieApi.ComedyMovies} />
        </div>
        <div className="App">
          <Row title={"Romance Movies"} content={MovieApi.Romancemovies} />
        </div>
        <div className="App">
          <Row title={"Documentaries"} content={MovieApi.Documentaries} />
        </div>
      </div>
    </div>
  );
}

export default App;
