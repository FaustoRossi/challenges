import React from "react";
import dynamic from "next/dynamic";

const bingo = dynamic(() => import("../components/bingo"), { ssr: false });
export default bingo;
