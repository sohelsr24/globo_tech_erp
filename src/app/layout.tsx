import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Apex Suite — Product Management & Inventory ERP (Bangladesh)',
  description: 'Enterprise ERP for IT, CCTV, Networking, Data Center Import & Project Distribution in Bangladesh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className="dark">
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
