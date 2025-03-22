import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";
import getToken from "@/src/auth/token";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getUserActive() {
  const token = getToken();
  const url = `${process.env.API_URL}/auth/user`;
  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await req.json();

  if (res.id) {
    return true;
  } else if (res.error) {
    return false;
  }
}

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await getUserActive();
  if (isAuth) {
    redirect("/admin");
  }
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        <div className="flex justify-center bg-purple-950 lg:bg-auth lg:bg-30 bg-no-repeat bg-left-bottom ">
          <div className="w-96 py-10 lg:py-20 flex justify-center items-center ">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
        </div>
        <div className="p-10 lg:py-28">
          <div className="max-w-3xl mx-auto">{children}</div>
        </div>
      </div>

      <ToastNotification />
    </>
  );
}
