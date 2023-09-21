'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { useSession } from 'next-auth/react';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import router from 'next/router';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log('navbar session', session);
  console.log('navbar status', status);

  const menuItems = [
    //TODO: add actual menu items
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];
  async function handleSignOut() {
    await signOut();
    router.push('/');
  }
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <Link href="/">
            <Image priority src={logo} alt="Logo" width={50} height={50} />
          </Link>
          <p className="font-bold text-inherit uppercase text-white">I have been there</p>
        </NavbarBrand>
      </NavbarContent>
      {status === 'authenticated' && (
        <NavbarContent justify="end">
          <NavbarItem>
            <Button onClick={handleSignOut} color="primary" variant="flat">
              Log out
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
