import { useMemo } from "react";
import Notifications from "./components/notifications";
import { notificationsData } from "./data";
import { useListState } from "@mantine/hooks";

export default function App() {
  const [values, handlers] = useListState(notificationsData);

  const readCount = useMemo(() => {
    return values.filter((item) => !item.isRead).length;
  }, [values]);

  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Notifications Page</h1>

      <div className="min-h-screen grid md:place-items-center">
        <div className="bg-white p-4 md:my-4 lg:p-8 w-custom-width rounded-lg shadow text-sm lg:text-base">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl lg:text-2xl flex items-center">
              Notifications
              <span className="bg-custom-blue inline-block text-white leading-none text-base lg:text-lg px-3 py-1 lg:py-0.5 ml-3 rounded-md">
                {readCount}
              </span>
            </h2>
            <p
              className="text-dark-grayish-blue hover:text-custom-blue"
              role="button"
              onClick={() =>
                handlers.apply((item) => ({ ...item, isRead: true }))
              }
            >
              Mark all as read
            </p>
          </div>

          <Notifications>
            {values.map((item, index) => (
              <Notifications.Item
                key={index}
                onClick={() => handlers.setItemProp(index, "isRead", true)}
                {...item}
              />
            ))}
          </Notifications>
        </div>
      </div>
    </main>
  );
}
