import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import {withFirebase} from '../firebase';

const Account: React.FC = (props: any) => {
  const [events, setEvents] = useState([])
  const [show, setShow] = useState(false)
  const [authUser, setAuthUser] = useState(null)

  const handleAuth = (authUser: any) => {
    setAuthUser(authUser);
  }

  const signOut = () => {
    props.firebase.doSignOut();
    props.history.push('/');
  }

  useEffect(() => {
    const listener = props.firebase.auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        handleAuth(authUser)
        if (authUser !== null) {
          const { db } = props.firebase;
          db.collection("events")
            .where("uid", "==", props.firebase.auth.currentUser.uid)
            .get()
            .then((querySnapshot: any) => {
              const events: any = [];
              querySnapshot.docs.forEach((doc: any) => {
                events.push(doc.data())
              });
              //Check if array is empty
              if(events.length > 0){
                return setEvents(events)
              }
              return setEvents([])              
            });
        }
      } else {
        props.history.push('/login');
      }
    });
    return () => listener();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.firebase.auth.onAuthStateChanged])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <button onClick={signOut}>logout</button>
      </IonContent>
    </IonPage>
  );
};

export default withFirebase(Account);