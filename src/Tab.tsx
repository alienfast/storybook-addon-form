import { useParameter } from "@storybook/api";
import React from "react";

import { TabContent } from "./components/TabContent";
import { PARAM_KEY } from "./constants";

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const paramData = useParameter<string>(PARAM_KEY, "");

  return active ? <TabContent code={paramData} /> : null;
};
