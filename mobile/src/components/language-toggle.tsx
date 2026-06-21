"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
    return (
        <Button
            type="button"
            variant="link"
            size="icon"
            className={cn(className)}
            title="English"
        >
            <Globe className="size-4" />
        </Button>
    );
}
