import { Centrifuge } from "centrifuge";
import { useTypedDispatch, useTypedSelector } from "./redux";
import { useEffect } from "react";
import { notificationSlice } from "../store/reducers/NotificationSlice";

const centrifuge = new Centrifuge("ws://0.0.0.0:1580/connection/websocket", {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2ODg1MjcxMjksImlhdCI6MTY4NzkyMjMyOX0.xxxCFaJnl7Qnfv7NeIs8-8CZj7ty6cnQLcTuxm9Qj_A",
});

const notificationsSub = centrifuge.newSubscription("news");

centrifuge.connect();
export const useNotifications = () => {
  const dispatch = useTypedDispatch();

  const notifications = useTypedSelector(
    (state) => state.notificationsReducer.notifications
  );

  useEffect(() => {
    notificationsSub.on("publication", (data) => {
      console.log("data", data);
      dispatch(notificationSlice.actions.addNotification(data));
    });

    notificationsSub.subscribe();

    return () => {
      centrifuge.disconnect();
    };
  }, [dispatch]);

  return {
    news: notifications,
  };
};
