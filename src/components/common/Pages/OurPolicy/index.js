"use client";

import { Terms_Conditions } from "@/lib/constants";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function OurPolicy() {
    const searchParams = useSearchParams();
    const [currentPolicy, setCurrentPolicy] = useState(0); // Default to Terms & Conditions

    useEffect(() => {
        const policy = searchParams.get("policy");
        if (policy === "privacy") {
            setCurrentPolicy(1); // Set to Privacy Policy
        } else {
            setCurrentPolicy(0); // Default to Terms & Conditions
        }
    }, [searchParams]);

    const renderPolicyContent = () => {
        return (
            <div dangerouslySetInnerHTML={{ __html: Terms_Conditions[currentPolicy].content }}></div>
        );
    };

    return (
        <div className="p-6">
            <h1 className="text-lg font-bold">Our Policies</h1>
            {renderPolicyContent()}
        </div>
    );
}
