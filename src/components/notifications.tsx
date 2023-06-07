import { Data } from "../data";
import { cn } from "../lib/utils";

interface NotificationsProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

export default function Notifications({
  className,
  children,
  ...props
}: NotificationsProps) {
  return (
    <ul className={cn("space-y-3", className)} {...props}>
      {children}
    </ul>
  );
}

type NotificationItemProps = Data & {
  onClick: () => void;
};

function NotificationItem(props: NotificationItemProps) {
  return (
    <li
      className={cn(
        "px-2 py-4 lg:px-4 rounded-md",
        !props.isRead && "bg-very-light-grayish-blue"
      )}
      onClick={props.onClick}
    >
      <div
        className={cn(
          "grid gap-x-4 gap-y-2",
          props.type === "picture"
            ? "grid-cols-[auto_1fr_auto]"
            : "grid-cols-[auto_1fr]"
        )}
      >
        <img
          className={cn("w-8 h-8 lg:w-12 lg:h-12 rounded-full")}
          src={props.from.avatar}
          alt=""
        />

        <div>
          <p className="text-dark-grayish-blue">
            <a
              href="#"
              className="font-bold text-very-dark-blue inline-block mr-1.5 hover:text-custom-blue active:text-custom-blue"
            >
              {props.from.name}
            </a>
            {props.message}
            {(props.type === "post" || props.type === "group") && (
              <a
                href="#"
                className={cn(
                  "font-bold ml-1.5 hover:text-custom-blue active:text-custom-blue",
                  props.type === "group" && "text-custom-blue"
                )}
              >
                {props.type === "post" && props.post}
                {props.type === "group" && props.group}
              </a>
            )}
            {!props.isRead && (
              <span className="w-2 h-2 bg-custom-red inline-block rounded-full ml-1.5 align-middle mb-0.5"></span>
            )}
          </p>
          <p className="text-sm text-dark-grayish-blue/70">{props.time}</p>
        </div>
        {props.type === "picture" && (
          <img src={props.url} className="w-11 h-11 rounded-md" alt="image" />
        )}
        {props.type === "dm" && (
          <div className="col-start-2 ">
            <a
              href="#"
              className="block border rounded p-4 text-dark-grayish-blue hover:bg-light-grayish-blue-2"
            >
              {props.content}
            </a>
            {/* <p className="p-4 border rounded text-dark-grayish-blue">
              {props.content}
            </p> */}
          </div>
        )}
      </div>
    </li>
  );
}

Notifications.Item = NotificationItem;
