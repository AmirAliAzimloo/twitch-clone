"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

// import { ToggleSkeleton } from "./toggle";
// import { FollowingSkeleton } from "./following";
// import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  // const [width, setWidth] = useState(collapsed ? 70 : 240); // Initial width of the sidebar
  // const isResizing = useRef(false);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if (isResizing.current) {
  //       const newWidth = Math.max(70, Math.min(240, e.clientX));
  //       setWidth(newWidth);
  //     }
  //   };

  //   const handleMouseUp = () => {
  //     if (isResizing.current) {
  //       isResizing.current = false;
  //     }
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mouseup', handleMouseUp);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //     document.removeEventListener('mouseup', handleMouseUp);
  //   };
  // }, []);

  // const handleMouseDown = () => {
  //   isResizing.current = true;
  // };

  // useEffect(()=>{
  //   if(width <= 160){
  //     onCollapse();
  //   }else{
  //     onExpand();
  //   }
  // },[width])

  if (!isClient) {
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        {/* <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton /> */}
      </aside>
    );
  }

  return (
    <>
    {/* <aside
      className={cn(
        "fixed left-0 flex flex-col h-full bg-background border-r border-[#2D2E35] z-50",
      )}
      style={{ width: collapsed ? '70px' : `${width}px` }}
    >
      {children}
      <div
        className="absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize"
        onMouseDown={handleMouseDown}
      />
    </aside> */}
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
    </>
  );
};
