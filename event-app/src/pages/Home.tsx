import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";

import homeSVG from "../assets/backgrounds/Rhône.svg";

const Home: React.FC = (props: any) => {
  return (
    <IonPage>
      <IonContent>
        <img className="image" src={homeSVG} alt="" />
        <div className="hero__content ion-padding">
          <h1 className="title">Hello there!</h1>
          <p>
            Eventoo is a perfect place to build, manage and grow your events
          </p>
          <button
            className="hero__button"
            onClick={() => props.history.push("/events")}
          >
            Explore
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
