import Navigation from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function HomeRegist() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <div className="divider"></div>
        <h1>Registration</h1>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
      </div>
      {/* PAGE HEADER END */}
      <section className="homeregist-section">
        <div>
          <div className="wrapper">
            <div className="text-center">
              <h1 className="mx-auto text-sm md:text-lg lg:text-5xl">
                REGISTRATION FORM
              </h1>
              <h3 className="mx-auto mt-5 mb-2 text-sm md:text-lg lg:text-2xl">
                Choose Your Citizenship Category for Registration AISEEF 2026
              </h3>
            </div>
          </div>
          <div className="link-web mx-auto text-center">
            <Link href="" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5 m-2">
                CLOSE{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5 m-2">
                CLOSE{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            {/* <Link href="/registration/homeindo" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5 m-2">
                INDONESIAN CITIZEN{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link>
            <Link href="/registration/homeinter" legacyBehavior>
              <a className="btn btn-custom text-center me-lg-5 m-2">
                INTERNATIONAL CITIZEN{" "}
                <i className="fa-solid fa-earth-americas"></i>
              </a>
            </Link> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomeRegist;
