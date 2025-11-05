import { GroupEtry } from "@/features/groupEntry/ui/groupEntry";
import { MakeGroup } from "@/features/makeGroup/ui/makeGroup/makeGroup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/groupentry",
    element: <GroupEtry />,
  },
  {
    path: "/makegroup",
    element: <MakeGroup />,
  },
]);
