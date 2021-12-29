/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { AdminConfig } from "@keystone-6/core/types";
import Link from "next/link";
import { LogoBlack } from "./logo-black";

export const CustomLogo = () => {
  return (
    <Link href="/" passHref>
      <LogoBlack />
    </Link>
  );
};

export const components: AdminConfig["components"] = {
  Logo: CustomLogo,
};
