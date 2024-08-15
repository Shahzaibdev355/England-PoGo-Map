import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
           <footer>
                    <div className="pb-4 pt-5 mx-4">
                        <ul className="border-bottom border-2 border-dark pb-5">
                            <li className="d-inline-block me-2"><Link className="text-decoration-none text-white" to="/">Home</Link></li>
                            <li className="d-inline-block mx-2"><Link className="text-decoration-none text-white" to="#">Coverage</Link></li>
                            <li className="d-inline-block mx-2"><Link className="text-decoration-none text-white" to="/Pricing">Pricing</Link>
                            </li>
                            <li className="d-inline-block mx-2"><Link className="text-decoration-none text-white" to="#">Help</Link></li>
                        </ul>
                        <div className="my-5">
                            <h6 className="fw-semibold text-white mx-2">Copyright © 2019-2023, MagDevMedia. All Rights Reserved.</h6>
                            <p className="text-white mx-2 mt-4">This website and the authors have no relationship with Niantic, Nintendo, The
                                Pokemon Company, or any other Pokémon related company. Pokémon™ Pokémon Go is ©2023 Niantic, Inc. ©2023
                                Pokémon. ©1995–2023 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Pokémon character names are
                                trademarks of Nintendo. Other trademarks are the property of their respective owners.</p>
                        </div>
                    </div>
                </footer>
        </>
     );
}
 
export default Footer;