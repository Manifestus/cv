"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import FrozenRoute from "@/app/Components/FrozenRoute";
import { Box } from "@mui/material";

const PageAnimatePresence = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Box component={motion.div} key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </Box>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
