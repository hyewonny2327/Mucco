import Link from "next/link";
import React from "react";

const userPage = () => {
  return (
    <div>
      <div>userPage</div>
      <Link href={"/user-page/info"}>info</Link>
      <Link href={"/user-page/membership"}>membership</Link>
      <Link href={"/user-page/setting"}>setting</Link>
      <Link href={"/user-page/reservation"}>reservation</Link>
    </div>
  );
};

export default userPage;
