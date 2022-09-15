import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Default from "./Ranks/Default";
import Member from "./Ranks/Member";
import Ghoul from "./Ranks/Ghoul";
import Ghoul_plus from "./Ranks/Ghoul+";
import Spectre from "./Ranks/Spectre";
import Spectre_plus from "./Ranks/Spectre+";
import Reaper from "./Ranks/Reaper";

const Ranks: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ranks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              <Default />
            </IonCol>
            <IonCol size="3">
              <Member />
            </IonCol>
            <IonCol size="3">
              <Ghoul />
            </IonCol>
            <IonCol size="3">
              <Ghoul_plus />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <Spectre />
            </IonCol>
            <IonCol size="3">
              <Spectre_plus />
            </IonCol>
            <IonCol size="3">
              <Reaper />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Ranks;
