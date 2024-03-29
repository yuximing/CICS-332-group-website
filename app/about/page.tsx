export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col text-left">
            <div
            className="rounded-lg border border-transparent px-5 py-4 transition-colors"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Books
            </h2>
            <p className={`m-0 text-base opacity-50`}>
                <a href="https://www.oreilly.com/library/view/flight-simulation-software/9781119737674/?sso_link=yes&sso_link_from=queens-university" className="no-underline hover:underline">Flight Simulation Software</a>
                <br></br>
                <a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470685662" className="no-underline hover:underline">Principles of Flight Simulation</a>
            </p>
            </div>

            <div
            className="rounded-lg border border-transparent px-5 py-4 transition-colors"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Scientific Papers
            </h2>
            <p className={`m-0 text-base opacity-50`}>
                <a href="https://ieeexplore.ieee.org/document/5364558" className="no-underline hover:underline">Architecture Development of Research Flight Simulator Based on COTS</a>
                <br></br>
                <a href="https://ieeexplore.ieee.org/document/8356168" className="no-underline hover:underline">Automated Testing of Simulation Software in the Aviation Industry: An Experience Report</a>
                <br></br>
                <a href="https://ieeexplore.ieee.org/document/9336527" className="no-underline hover:underline">Flight Simulator Architecture and Computer System Design and Research</a>
            </p>
            </div>

            <div
            className="rounded-lg border border-transparent px-5 py-4 transition-colors"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                FlightGear Wiki
            </h2>
            <p className={`m-0 text-base opacity-50`}>
                <a href="https://www.flightgear.org/legacy/legacy.shtml" className="no-underline hover:underline">https://www.flightgear.org/legacy/legacy.shtml</a>
                <br></br>
                <a href="https://wiki.flightgear.org/Main_Page" className="no-underline hover:underline">https://wiki.flightgear.org/Main_Page</a>
            </p>
            </div>
        </div>

    </main>
  );
}
