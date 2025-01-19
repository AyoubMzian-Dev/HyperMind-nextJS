import React, { ReactNode } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

// Define the props interface
interface SideBarFormProps {
    children: ReactNode; // The type for children props
}

const SideBarForm: React.FC<SideBarFormProps> = ({ children }) => {
    return (
        <Sheet>
            <SheetTrigger className="bg-green-600 flex rounded-sm py-2 px-1.5 text-gray-200 hover:bg-green-700">
                {children}
            </SheetTrigger>
            <SheetContent className="text-white w-1/2 bg-sidebar border-none">

                <SheetHeader className="flex justify-between  p-4">
                    <SheetClose className="">Save Task</SheetClose>
                    <SheetTitle className="">Create New Task</SheetTitle>
                </SheetHeader>

                <div>

                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SideBarForm;