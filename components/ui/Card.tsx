import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated";
  padding?: "sm" | "md" | "lg";
}

const variantClasses: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-gray-50 dark:bg-gray-900",
  bordered: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
  elevated: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/60 dark:shadow-black/40",
};

const paddingClasses: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  variant = "bordered",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
