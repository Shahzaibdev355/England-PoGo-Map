import Footer from "./Footer";
import Navbar from "./Navbar";

const Pricing = () => {
    return ( 
        <>
            <div>

                <Navbar/>

               
                <section>
                    <div className="container">
                        <div className="my-5">
                            <h1 className="display-5 text-center fw-bold">Pricing Plans</h1>
                            <div className="pricing-box my-5">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-md-6 col-lg-4 my-2">
                                        <div className="pricing-card text-start mx-lg-0 mx-xl-3 d-flex flex-column h-100">
                                            <h1 className="text-center pt-3">Collector</h1>
                                            <hr />
                                            <div className="text-center mt-4">
                                                <h1 className="d-inline-block display-3 fw-normal"> <span className="fw-normal fs-1">$</span>5</h1><small>/month</small>
                                            </div>
                                            <ul className="list-unstyled my-5 flex-grow-1 text-start">
                                                <li className="text-decoration-none my-3 mx-4">Includes 3 day free trial!</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">All Free Features</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Pokemon with IVs</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Gym Locations</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Pokestop Locations</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Quests / Research</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Routes</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Showcase, Kecleon, and Gimmighoul Locations</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Discord Alerts (Rotom)</li>
                                            </ul>
                                            <div>
                                                <hr />
                                                <div className="text-center">
                                                    <button className="btn-cus-sty-grad-color py-2 my-4 bg-transparent fw-semibold">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 my-2">
                                        <div className="pricing-card text-start active mx-lg-0 mx-xl-3 d-flex flex-column h-100">
                                            <h1 className="text-center pt-3">Ace Trainer</h1>
                                            <hr />
                                            <div className="text-center mt-4">
                                                <h1 className="d-inline-block display-3 fw-normal"> <span className="fw-normal fs-1">$</span>10</h1><small>/month</small>
                                            </div>
                                            <ul className="list-unstyled my-5 flex-grow-1 text-start">
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">All Collector Features</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Pokemon with IVs and PVP</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Rocket Invasions</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Interactive Rotom Manager</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Individual Gym Alerts</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Map Filter Backups</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Showcase, Kecleon, and Gimmighoul Alerts</li>
                                                <li className="text-decoration-none fw-semibold my-3 mx-4">Showcase Rankings</li>
                                            </ul>
                                            <div>
                                                <hr />
                                                <div className="text-center">
                                                    <button className="btn-cus-sty-grad-color py-2 my-4 bg-transparent fw-semibold">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-guide-text text-center my-5">
                                    <small className="fw-semibold">Please note that all purchases are processed by Upgrade.Chat and Stripe. You will be redirected to their website to complete your purchase. In order to make a purchase you must be a Verified member of our Discord so be sure to join before attempting to purchase.</small>
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
 
export default Pricing;