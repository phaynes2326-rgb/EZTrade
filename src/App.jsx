import "./App.css";
export default function App() {

  const verityLink =
    "https://my.veritymarkets.com/register?referral=019ef7ac-b4f3-70ee-98a5-4cc05a00df07";

  const backAtZeroLink =
    "https://www.backatzero.io/ref/phaynes";

  return (
    <div className="page">

      <nav>
        <h1>EZTrade</h1>
      </nav>

      <section className="hero">

        <h2>
          Trade Smarter.<br />
          Build Your Future.
        </h2>

        <p>
          Access trusted platforms designed to help you take control
          of your financial journey.
        </p>


        <div className="buttons">

          <a 
            href={verityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary"
          >
            Start Trading With Verity Markets
          </a>


          <a
            href={backAtZeroLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
          >
            Improve Your Financial Future
          </a>

        </div>

      </section>


      <footer>
        © {new Date().getFullYear()} EZTrade. All rights reserved.
      </footer>

    </div>
  );
}
