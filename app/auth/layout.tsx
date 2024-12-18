import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";
import { verifySession } from "@/src/auth/dalt";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await verifySession();
  if (user) {
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
