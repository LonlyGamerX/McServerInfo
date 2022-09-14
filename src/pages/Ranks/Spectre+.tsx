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

const Spectre_plus: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Spectre+</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Permissions:
          <IonList>
            <IonItem>
              <IonLabel>All Perms from Spectre rank</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>/fly command</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Higher priority in queues</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default Spectre_plus;
