import { cva } from "class-variance-authority";

const base = "flex gap-2 border-2 w-fit px-4 py-2 font-normal justify-center items-center";

const button = cva(base, {
    variants: {
        intent: {
            primary: [
                "border-foreground",
                "text-foreground",
                "hover:bg-foreground",
                "hover:text-background",
            ],
            square: [
                "border-background",
                "text-background",
                "text-shadow-xl",
            ],
            rounded: [
                "border-foreground",
                "text-foreground",
                "hover:bg-foreground",
                "hover:text-background",
                "rounded-full"
            ],
        }
    },
    compoundVariants: [{ intent: "primary" }],
    defaultVariants: {
        intent: "primary",
    },
});

export default function Button({ intent, className, ...rest }) {
    return <button {...rest} className={button({ intent, className })} />;
}