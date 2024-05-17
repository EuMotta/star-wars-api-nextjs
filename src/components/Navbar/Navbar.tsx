'use client';
import React, { useState } from 'react';

import { cn } from '@/utils/cn';

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '../ui/Navbar/navbar-menu';
import Theme from '../ui/Theme/Theme';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 w-full" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}
    >
      <Menu setActive={setActive}>
        <Theme />
        <div className="flex gap-5">
          <MenuItem setActive={setActive} active={active} item="Motta">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Desenvolvimento Web</HoveredLink>
              <HoveredLink href="/interface-design">
                Design de Interface
              </HoveredLink>
              <HoveredLink href="/seo">Informações</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projetos">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="ThreadWorld"
                href="https://threads-next-js.vercel.app/"
                src="/bg/hero.jpg"
                description="Demonstrar o funcionamento de um thread."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Skills">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/soft-skills">Soft Skills</HoveredLink>
            </div>
          </MenuItem>
        </div>
        <div />
      </Menu>
    </div>
  );
}
