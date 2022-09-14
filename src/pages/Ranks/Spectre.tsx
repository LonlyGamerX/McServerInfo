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

const Spectre: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Spectre</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Permissions:
          <IonList>
            <IonItem>
              <IonLabel>All Perms from Ghoul+ rank</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>1 extra login reward</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Higher priority with support tickets</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default Spectre;
