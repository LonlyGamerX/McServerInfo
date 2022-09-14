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

const Default: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Default</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          Permissions:
          <IonList>
            <IonItem>
              <IonLabel>Chat.channels.all</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Kitpvp.all</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>deluxehub.command.vanish</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>plots.visit</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default Default;
