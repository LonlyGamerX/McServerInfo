import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";

const Ghoul: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ghoul</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Permissions:
          <IonList>
            <IonItem>
              <IonLabel>All Perms from Default rank</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>A thank you note from the devs</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>New chat color</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default Ghoul;
