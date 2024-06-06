'use client';
import React, { useState } from 'react';

import { cn } from '@/utils/cn';

import Breadcrumb from '../breadcrumb/breadcrumb';
import {
  HoveredLink,
  HoveredSubLink,
  Menu,
  MenuItem,
  SubLink,
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
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Procurar">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/choices">Procurar</HoveredLink>
              <SubLink>
                <HoveredSubLink href="/choices/people/1">
                  Personagens
                </HoveredSubLink>
                <HoveredSubLink href="/choices/planets/1">
                  Planetas
                </HoveredSubLink>
              </SubLink>
            </div>
          </MenuItem>
        </div>
        <div />
      </Menu>
      <Breadcrumb />
    </div>
  );
}
