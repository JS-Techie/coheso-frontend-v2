"use client"
import { Inter } from "next/font/google";
import { NextUIProvider, Spacer, Button, Divider } from "@nextui-org/react";
import Link from 'next/link';
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import "./globals.css";
import LoadingPage from "./loading";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
              <div className="grid grid-cols-12 gap-4 p-4 ">
                <div className="col-span-4 col-start-1 ml-20">
                  <span className="border-3 rounded-2xl border-gray-150 pl-3 pr-3 pt-4 pb-1 text-center align-middle"><Button variant="shadow" isDisabled radius="md" className="text-3xl font-extralight font-sans">FORMITECT</Button></span>
                </div>
                <div className="col-span-4 col-start-8 text-right space-x-7 ">
                  <Link href="/">
                    <Button variant="bordered" radius="sm" className={`border-b-4 border-t-0 border-l-0 border-r-0 border-transparent hover:border-gray-400 focus:border-gray-400 ${pathName === '/' ? 'border-gray-400' : ''}`}>Home</Button>
                  </Link>
                  <Link href="/viewall">
                    <Button variant="bordered" radius="sm" className={`border-b-4 border-t-0 border-l-0 border-r-0 border-transparent hover:border-gray-400 focus:border-gray-400 ${pathName === '/viewall' ? 'border-gray-400' : ''}`}>All Forms</Button>
                  </Link>
                  <Link href="/responsesubmit">
                    <Button variant="bordered" radius="sm" className={`border-b-4 border-t-0 border-l-0 border-r-0 border-transparent hover:border-gray-400 focus:border-gray-400 ${pathName === '/responsesubmit' ? 'border-gray-400' : ''}`}>Submit A Response</Button>
                  </Link>
                </div>
              </div>
            </header>
            <Divider />
          <div className="container mx-auto p-6 mt-[4.5%]">
            <Suspense fallback={<LoadingPage/>}>
              <Toaster position="bottom-right" />
              {children}  
            </Suspense>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
