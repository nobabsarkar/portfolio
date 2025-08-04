/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

// import { availableLocales, localeMetadata } from "@/lib/locales";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { availableLocales, localeMetadata } from "@/lib/locales";

// import { availableLocales, localeMetadata } from "@/lib/locales";

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentLocale, setCurrentLocale] = useState("bn");

  useEffect(() => {
    const stored = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    if (stored) {
      setCurrentLocale(stored);
    }
  }, []);

  const changeLocale = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    setCurrentLocale(locale);
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {currentLocale && localeMetadata[currentLocale]?.flagUrl ? (
            <img
              src={localeMetadata[currentLocale].flagUrl}
              alt={`${localeMetadata[currentLocale].name} flag`}
              width={20}
              height={15}
              className="rounded-sm object-cover"
            />
          ) : (
            "🌐"
          )}
          <span className="sr-only">Select Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((locale: any) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => changeLocale(locale)}
            disabled={locale === currentLocale}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={localeMetadata[locale]?.flagUrl ?? ""}
              alt={`${localeMetadata[locale]?.name ?? locale} flag`}
              width={20}
              height={15}
              className="rounded-sm object-cover"
            />
            {localeMetadata[locale]?.name ?? locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
