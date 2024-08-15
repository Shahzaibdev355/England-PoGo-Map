


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//     faArrowUp
// }
//     from "@fortawesome/free-solid-svg-icons"


import Navbar from './Navbar';
import Footer from './Footer';



const Home = () => {




    return (
        <>
            <div>
                
                <Navbar/>

                
                    <section className="sec-1 my-5">
                        <div className="container border-bottom border-2 border-dark">
                            <h1 className="display-1 fw-bold text-cus-font-sty">New England PoGo Map</h1>
                            <img className="w-100 my-4" src="/images/bpm.webp" alt />
                            <div className="row py-4">
                                <div className="col-12 col-lg-6">
                                    <h1 className="text-center fw-semibold text-cus-font-sty display-5">Coverage in:</h1>
                                    <h3 className="text-center text-white">CT, NH, MA, ME, NY, RI, &amp; VT</h3>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="text-center">
                                        <button className="btn-cus-sty-grad-color py-2 mt-4 bg-transparent fw-semibold">Coverage Map</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sec-2 my-5">
                        <div className="container border-bottom border-2 border-dark">
                            <h1 className="text-cus-font-sty fw-bold">Daily Stats</h1>
                            <div className="row my-4">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="my-4 py-3 text-center sec-2-grey-box-cus-sty">
                                        <h4 className="text-white">Scanned Pokemon</h4>
                                        <h1 className="sec-2-text-grad-sty display-5 pt-4 fw-semibold">0</h1>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="my-4 py-3 text-center sec-2-grey-box-cus-sty">
                                        <h4 className="text-white">Research Tasks</h4>
                                        <h1 className="sec-2-text-grad-sty display-5 pt-4 fw-semibold">0</h1>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="my-4 py-3 text-center sec-2-grey-box-cus-sty">
                                        <h4 className="text-white">Team Rocket Invasions</h4>
                                        <h1 className="sec-2-text-grad-sty display-5 pt-4 fw-semibold">0</h1>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="my-4 py-3 text-center sec-2-grey-box-cus-sty">
                                        <h4 className="text-white">Raid Bosses</h4>
                                        <h1 className="sec-2-text-grad-sty display-5 pt-4 fw-semibold">0</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sec-3 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="mx-2 my-4">
                                        <button className="sec-3-discord-box-cus-sty"><a className="text-decoration-none" href="#">
                                            <img className="img-fluid discord-image" src="/images/dc-org-blue.png" alt="Discord" />
                                            <div className="text-container">
                                                <div className="default-text text-start px-5">
                                                    <p className="fw-semibold fs-4 text-white">Discord</p>
                                                    <p className="text-white">Push notifications available via our Discord so you never miss a hundo</p>
                                                </div>
                                                <div className="hover-text">
                                                    <p className="fw-semibold fs-4 text-white">Join Our Discord</p>
                                                </div>
                                            </div>
                                        </a>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="mx-2 my-4">
                                        <button className="sec-3-map-box-cus-sty"><a className="text-decoration-none" href="#">
                                            <img className="img-fluid map-image" src="/images/map-orange.png" alt="Map" />
                                            <div className="text-container">
                                                <div className="default-text text-start px-5">
                                                    <p className="fw-semibold fs-4 text-white">Interactive Map</p>
                                                    <p className="text-white">Transform your PoGo playing experience by seeing where spawns, quests, raids and
                                                        more are at all times</p>
                                                </div>
                                                <div className="hover-text">
                                                    <p className="fw-semibold fs-4 text-white">View out interactive map</p>
                                                </div>
                                            </div>
                                        </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                

               
               <Footer/>

            </div>




        </>
    );
}

export default Home;