import { cn } from "../lib/utils";

type User = {
  name: string;
  avatar: string;
};

function Avatar({ className, ...props }: React.HTMLProps<HTMLImageElement>) {
  return (
    <img
      className={cn("w-8 h-8 lg:w-12 lg:h-12 rounded-full", className)}
      {...props}
    />
  );
}

export function BasicNotification(props: {
  from: User;
  message: string;
  time: string;
  isRead?: boolean;
  entity?: {
    type: "post" | "group";
    name: string;
  };
}) {
  return (
    <li
      className={cn(
        "px-2 py-4 lg:px-4 rounded-md",
        !props.isRead && "bg-very-light-grayish-blue"
      )}
    >
      <div className={cn("grid gap-x-4 gap-y-2 grid-cols-[auto_1fr]")}>
        <Avatar src={props.from.avatar} />

        <div>
          <p className="text-dark-grayish-blue">
            <strong className="font-bold text-very-dark-blue inline-block mr-1.5">
              {props.from.name}
            </strong>
            {props.message}
            {props.entity && (
              <strong
                className={cn(
                  "font-bold ml-1.5",
                  props.entity.type === "group" && "text-custom-blue"
                )}
              >
                {props.entity.name}
              </strong>
            )}
            {!props.isRead && (
              <span className="w-2 h-2 bg-custom-red inline-block rounded-full ml-1.5 align-middle mb-0.5"></span>
            )}
          </p>
          <p className="text-sm text-dark-grayish-blue/70">{props.time}</p>
        </div>
      </div>
    </li>
  );
}

export function PictureNotification(props: {
  from: User;
  message: string;
  time: string;
  isRead?: boolean;
  url: string;
}) {
  return (
    <li
      className={cn(
        "px-2 py-4 lg:px-4 rounded-md",
        !props.isRead && "bg-very-light-grayish-blue"
      )}
    >
      <div className="grid grid-cols-[auto_1fr_auto] gap-4">
        <Avatar src={props.from.avatar} />

        <div>
          <p className="text-dark-grayish-blue">
            <strong className="font-bold text-very-dark-blue inline-block mr-1.5">
              {props.from.name}
            </strong>
            {props.message}

            {!props.isRead && (
              <span className="w-2 h-2 bg-custom-red inline-block rounded-full ml-1.5 align-middle mb-0.5"></span>
            )}
          </p>
          <p className="text-sm text-dark-grayish-blue/70">{props.time}</p>
        </div>
        <img src={props.url} className="w-11 h-11 rounded-md" alt="image" />
      </div>
    </li>
  );
}

export function DmNotification(props: {
  from: User;
  message: string;
  time: string;
  isRead?: boolean;
  content: string;
}) {
  return (
    <li
      className={cn(
        "px-2 py-4 lg:px-4 rounded-md",
        !props.isRead && "bg-very-light-grayish-blue"
      )}
    >
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <Avatar src={props.from.avatar} />

        <div>
          <p className="text-dark-grayish-blue">
            <strong className="font-bold text-very-dark-blue inline-block mr-1.5">
              {props.from.name}
            </strong>
            {props.message}
            {!props.isRead && (
              <span className="w-2 h-2 bg-custom-red inline-block rounded-full ml-1.5 align-middle mb-0.5"></span>
            )}
          </p>
          <p className="text-sm text-dark-grayish-blue/70">{props.time}</p>
        </div>
        <div className="col-start-2">
          <p className="p-4 border rounded text-dark-grayish-blue">
            {props.content}
          </p>
        </div>
      </div>
    </li>
  );
}
