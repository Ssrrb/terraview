import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Bienvenido!</h1>
          <p className="text-gray-500">
            Inicia sesión o regístrate para continuar
          </p>
          <div className="w-full max-w-md mt-8">
            <SignUp path="/sign-up" />
          </div>
        </div>
      </div>
    </div>
  );
}
