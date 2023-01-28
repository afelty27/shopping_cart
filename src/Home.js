import React from "react";
import { isElement } from "react-dom/test-utils";
import "./App.css";

//https://startbootstrap.com/previews/full-width-pics

function Home(props) {
  console.log("in home, shop items are: ");
  console.log(props.itemState);

  return (
    <div className="App">
      <div
        className="py-5 bg-image-full"
        style={{
          backgroundImage: `url(https://source.unsplash.com/wfh8dDlNFOk/1600x900)`,
          backgroundRepeat: "no-repeat",
          backgroundsize: "cover",
        }}
      >
        <div className="text-center my-5">
          <h1 className="text-white fs-3">Welcome!</h1>
          <p className="text-white-50 mb-0">
            A shop for all your fortnite needs
          </p>
        </div>
      </div>
      <div className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>SDLKFJSLKDJFLKJD LSDj LSKDJ</h2>
              <p className="lead">
                The chic gangster liked to start the day with a pink scarf. When
                transplanting seedlings, candied teapots will make the task
                easier.
              </p>
              <p className="mb-0">
                He loved eating his bananas in hot dog buns. I was offended by
                the suggestion that my baby brother was a jewel thief. It was
                difficult for Mary to admit that most of her workout consisted
                of exercising poor judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
