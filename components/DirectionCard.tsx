import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

type DirectionCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  text: string;
  action: string;
  icon: ReactNode;
  index: string;
};

export function DirectionCard({ href, eyebrow, title, text, action, icon, index }: DirectionCardProps) {
  return (
    <Link className="direction-card" href={href}>
      <div className="direction-arrow" aria-hidden="true">
        <ArrowIcon />
      </div>
      <div className="direction-content">
        <div className="direction-meta">
          <span>{eyebrow}</span>
          <span>{index}</span>
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <strong className="text-link">{action} <span aria-hidden="true">→</span></strong>
      </div>
      <div className="direction-visual" aria-hidden="true">
        <span className="visual-grid" />
        {icon}
        <small>Kép helye</small>
      </div>
    </Link>
  );
}
