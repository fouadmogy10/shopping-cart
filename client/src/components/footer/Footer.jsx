import React from "react";
import "../../css/footer/footer.css"
import {words} from "../../words"
const Footer =()=>{
    return(
        <footer>
        <div>
          <footer className="bg-dark text-center text-lg-start">
            <div className="text-center text-light p-3">
              {words.footerTitel}
              <span className="text-muted fw-bolder"> fouad FMF</span>
            </div>
          </footer>
        </div>
      </footer>
    )
}
export default Footer;