"use client"; // client component directive

import { usePathname } from "next/navigation";
import HomePage from "./Hero";

export default function ConditionalHero() {
  const pathname = usePathname();
  if (pathname === "/terms") return null;
  if (pathname === "/privacy") return null;
  if (pathname === "/cancel") return null;
  if (pathname === "/medicine") return null;
  if (pathname === "/communication") return null;
  if (pathname === "/faq") return null;
  if (pathname === "/contact") return null;
  if (pathname === "/about") return null;
  if (pathname === "/login") return null;
  if (pathname === "/signup") return null;
  if (pathname === "/products") return null;
  if (pathname === "/cart") return null;
  if (pathname === "/blog") return null;
  if (pathname === "/blogdetail") return null;
  if (pathname === "/blogdetail2") return null;
  if (pathname === "/blogdetail3") return null;
  if (pathname === "/blogdetail4") return null;
  if (pathname === "/blogdetail5") return null;
  if (pathname === "/blogdetail6") return null;
  if (pathname === "/blogdetail7") return null;
  if (pathname === "/blogdetail8") return null;
  if (pathname === "/blogdetail9") return null;
  if (pathname === "/blogdetail10") return null;
  if (pathname === "/category1") return null;
  if (pathname === "/category2") return null;
  if (pathname === "/category3") return null;
  if (pathname === "/category4") return null;
  if (pathname === "/category5") return null;
  if (pathname === "/category6") return null;
  if (pathname === "/forgotpassword") return null;

  if (pathname === "/productdetail1") return null;
  if (pathname === "/productdetail2") return null;
  if (pathname === "/productdetail3") return null;
  if (pathname === "/productdetail4") return null;
  if (pathname === "/productdetail5") return null;
  if (pathname === "/productdetail6") return null;
  if (pathname === "/readmore") return null;
  if (pathname === "/account/profile") return null;
  if (pathname === "/wishlist") return null;
  if (pathname === "/account/orders") return null;
  if (pathname === "/account/payment-methods") return null;
  if (pathname === "/account/payment-methods/new") return null;
  if (pathname === "/account/addresses") return null;
  if (pathname === "/account/addresses/new") return null;
  if (pathname === "/howwork") return null;
  if (pathname === "/company") return null;
  if (pathname === "/support") return null;
  if (pathname === "/locate") return null;

  return <HomePage />;
}
