import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children }: Props) => (
  <div>
    <main className="bg-[#FCFCFC]">{children}</main>;
  </div>
);
