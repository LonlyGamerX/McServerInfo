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
import { useData } from "../../api/useData";

const UsersExample: React.FC = () => {
  const { data } = useData();
  return (
    <>
      {data.map((item: any, index) => (
        <IonCard key={index} routerLink={`details/${item.login.username}`} >
          <IonAvatar>
            <img
              src={item.picture.thumbnail}
              alt="Avatar"
              className="UserAvatar"
            />
          </IonAvatar>
          <IonCardHeader>
            <IonCardSubtitle>User:</IonCardSubtitle>
            <IonCardTitle>{item.login.username}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Rank: {item.nat}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Last online: today</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Banned?: No</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Balance: Unknown</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
export default UsersExample;
