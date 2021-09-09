import React from "react";
import Caraousel from "./Caraousel";
import "./index.css"
import SignUpForm from "./SignUpForm";
import { SlideData } from "./SlideData";

export default function Wrapper() {
  return (
      <>
    <section className="container">
      <div className="left-half">
        <article>
          <SignUpForm/>
        </article>
      </div>
      <div className="right-half">
        <article>
        <Caraousel slides={SlideData} />
        </article>
      </div>
    </section>
    </>
  );
}
