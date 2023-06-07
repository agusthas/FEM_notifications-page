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
      avatar: "/images/avatar-mark-webber.webp",
    },
    message: "reacted to your recent post",
    time: "1m ago",
    post: "My first tournament today!",
  },
  {
    type: "follow",
    from: {
      name: "Angela Gray",
      avatar: "/images/avatar-angela-gray.webp",
    },
    message: "followed you",
    time: "1m ago",
  },
  {
    from: {
      name: "Jacob Thompson",
      avatar: "/images/avatar-jacob-thompson.webp",
    },
    message: "has joined your group",
    time: "1m ago",
    type: "group",
    group: "Chess Club",
  },
  {
    from: {
      name: "Rizky Hasanuddin",
      avatar: "/images/avatar-rizky-hasanuddin.webp",
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
      avatar: "/images/avatar-kimberly-smith.webp",
    },
    message: "commented on your picture",
    time: "1m ago",
    type: "picture",
    url: "/images/image-chess.webp",
    isRead: true,
  },
  {
    from: {
      name: "Nathan Peterson",
      avatar: "/images/avatar-nathan-peterson.webp",
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
      avatar: "/images/avatar-anna-kim.webp",
    },
    message: "left the group",
    time: "1m ago",
    type: "group",
    group: "Chess Club",
    isRead: true,
  },
];
