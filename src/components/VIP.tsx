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
            <IonCardTitle>VIP</IonCardTitle>
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
                <IonLabel>kick.all</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </>
    );
  };
  export default Default;
  