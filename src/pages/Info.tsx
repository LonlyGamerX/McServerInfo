import {
  IonAccordion,
  IonAccordionGroup,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Info: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton color="success" />
          </IonButtons>
          <IonTitle>Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Where are the ranks from? Accordion</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Ranks are from a from a minecraft server used to control
              permissions for use to help decrease griefing and trolling
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>What this work on both android and IOS</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              As far as i know yes
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel>Who made this?</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Me, Scott Zangenberg
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonLabel>Can i donate to help this project</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
              Not right now, but i will be adding a donation page soon
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Info;
