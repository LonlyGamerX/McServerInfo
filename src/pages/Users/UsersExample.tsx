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
  IonCardSubtitle,
  IonAvatar,
} from "@ionic/react";
import "./UsersExample.css";

const UsersExample: React.FC = () => {
  return (
    <>
      <IonCard>
        <IonAvatar>
          <img
            src="https://cdn.discordapp.com/avatars/265558590021042176/517fa83d894e819ecbfe855a60bc7961.webp"
            alt="Avatar"
            className="UserAvatar"
          />
        </IonAvatar>
        <IonCardHeader>
          <IonCardSubtitle>User:</IonCardSubtitle>
          <IonCardTitle>Jhon Nyanna</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel>Rank: Ghoul+</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Last online: today</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Banned?: No</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Balance: $36,234.39</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
};
export default UsersExample;
