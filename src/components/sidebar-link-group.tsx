import type { FC } from "react";
import React, { useState } from "react";

export type SidebarLinkGroupProps = {
  children(handleClick: () => void, open: boolean): React.ReactNode;
  activeCondition: boolean;
};

const SidebarLinkGroup: FC<SidebarLinkGroupProps> = ({
  children,
  activeCondition,
}) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children?.(handleClick, open)}</li>;
};

export default SidebarLinkGroup;
