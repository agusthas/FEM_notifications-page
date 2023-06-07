import avatarMarkWebber from "./assets/images/avatar-mark-webber.webp";
import avatarAngelaGray from "./assets/images/avatar-angela-gray.webp";
import avatarJacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import avatarRizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import avatarKimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import avatarNathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import avatarAnnaKim from "./assets/images/avatar-anna-kim.webp";
import imageChess from "./assets/images/image-chess.webp";

export type User = {
  name: string;
  avatar: string;
};

export type Data =
  | {
      type: "post";
      from: User;
      message: string;
      post: string;
      isRead?: boolean;
      time: string;
    }
  | {
      type: "group";
      from: User;
      message: string;
      group: string;
      isRead?: boolean;
      time: string;
    }
  | {
      type: "picture";
      from: User;
      message: string;
      url: string;
      isRead?: boolean;
      time: string;
    }
  | {
      type: "dm";
      from: User;
      message: string;
      content: string;
      isRead?: boolean;
      time: string;
    }
  | {
      type: "follow";
      from: User;
      message: string;
      isRead?: boolean;
      time: string;
    };

export const notificationsData: Data[] = [
  {
    type: "post",
    from: {
      name: "Mark Webber",
      avatar: avatarMarkWebber,
    },
    message: "reacted to your recent post",
    time: "1m ago",
    post: "My first tournament today!",
  },
  {
    type: "follow",
    from: {
      name: "Angela Gray",
      avatar: avatarAngelaGray,
    },
    message: "followed you",
    time: "1m ago",
  },
  {
    from: {
      name: "Jacob Thompson",
      avatar: avatarJacobThompson,
    },
    message: "has joined your group",
    time: "1m ago",
    type: "group",
    group: "Chess Club",
  },
  {
    from: {
      name: "Rizky Hasanuddin",
      avatar: avatarRizkyHasanuddin,
    },
    message: "sent you a private message",
    time: "1m ago",
    content:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
    type: "dm",
    isRead: true,
  },
  {
    from: {
      name: "Kimberly Smith",
      avatar: avatarKimberlySmith,
    },
    message: "commented on your picture",
    time: "1m ago",
    type: "picture",
    url: imageChess,
    isRead: true,
  },
  {
    from: {
      name: "Nathan Peterson",
      avatar: avatarNathanPeterson,
    },
    message: "reacted to your recent post",
    time: "1m ago",
    post: "5 end-game strategies to increase your win rate",
    type: "post",
    isRead: true,
  },
  {
    from: {
      name: "Anna Kim",
      avatar: avatarAnnaKim,
    },
    message: "left the group",
    time: "1m ago",
    type: "group",
    group: "Chess Club",
    isRead: true,
  },
];
