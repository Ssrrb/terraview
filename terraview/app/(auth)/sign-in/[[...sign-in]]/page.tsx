import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-green-500">
      {/* Left column - Sign in */}
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Bienvenido!</h1>
          <p className="text-base text-[#7E8CA0]">
            Inicia sesión o regístrate para continuar
          </p>
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
              <SignIn path="/sign-in" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
      </div>

      {/* Right column - Logo with blue background */}
      <div className="h-full bg-blue-500 hidden lg:flex items-center justify-center">
        <Image
          src="/logoipsum-221.svg"
          height={100}
          width={100}
          alt="Logo"
          className="w-32 h-auto"
        />
      </div>
    </div>
  );
}
