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

const Ghoul_plus: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ghoul+</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Permissions:
          <IonList>
            <IonItem>
              <IonLabel>All Perms from Ghoul rank</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>World Edit usage in plots</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Bouns 100$ for survival server</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default Ghoul_plus;
