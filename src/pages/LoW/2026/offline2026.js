import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
const bnr1 = "/assets/images/banner/bnr4.jpg";

const offline2026 = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- inner page banner --> */}
        <div
          className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <PageTitle motherMenu="List of Winners" activeMenu="List of Winner" />
        </div>
        {/* <!-- inner page banner END --> */}

          <div class="container page">
            <div className="text-center">
              <h3>Choose based on the Level of the Offline event you are participating in</h3>
            </div>
            <div className=" wrapper-btn text-center">
              <a
                href="https://drive.google.com/file/d/16S72vhOFDahEks_qA0T6t7a4SRSX_lTx/view?usp=drive_link"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                University{" "}
              </a>
              <a
                href="https://drive.google.com/file/d/1bvuEQRijx2RXpLC4aSBFA_S8uoYhFkr0/view?usp=drive_link"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Secondary{" "}
              </a>
              {/* <a
                href="https://drive.google.com/file/d/1oSPyg3E5wCdH9lLahjwmCdn0hHcGBO8t/view?usp=sharing"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Junior High School{" "}
              </a> */}
              <a
                href="https://drive.google.com/file/d/1rWRZvSYpHd0SfyjPhr4kBMapWQPbdqM6/view?usp=drive_link"
                target="_blank"
                className="btn btn-primary site-button m-3"
                style={{ fontSize: "22px", fontWeight: "bold" }}
              >
                {" "}
                Elementary{" "}
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default offline2026;
