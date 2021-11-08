/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@keystone-ui/core";
import { AdminConfig } from "@keystone-next/keystone/types";
import Link from "next/link";
import Image from "next/image";

export const CustomLogo = () => {
  return (
    <Link href="/" passHref>
      <Image
        src="./logo-black.svg"
        width={146}
        height={73}
        alt="logo"
        layout="fixed"
      />
    </Link>
  );
};

// Presently the Logo is the only Admin UI component that is customisable.
export const components: AdminConfig["components"] = {
  Logo: CustomLogo,
};
