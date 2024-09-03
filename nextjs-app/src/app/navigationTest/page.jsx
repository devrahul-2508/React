"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavigationTestPage() {
  const router = useRouter();

  // CLIENT SIDE NAVIGATION

  //get path name
  const pathName = usePathname();

  //get path query
  const query = useSearchParams();
  const handleClick = () => {
    console.log("clicked");
    router.push("/");
  };
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default NavigationTestPage;
