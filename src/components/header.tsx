import { Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import HeaderAuth from "./header-auth";

export default async function Header() {
   
    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input className="border border-purple-800 rounded" />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
               <HeaderAuth/>
            </NavbarContent>
        </Navbar>
    )
}