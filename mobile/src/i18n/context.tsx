"use client";

import React, { createContext, useContext } from "react";
import { en } from "./en";
import type { TranslationKeys } from "./en";

interface LanguageContextType {
    lang: "en";
    setLang: (lang: "en") => void;
    t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
    t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    return (
        <LanguageContext.Provider value={{ lang: "en", setLang: () => { }, t: en }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    return useContext(LanguageContext);
}
