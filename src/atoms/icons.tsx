import { ChatBubbleIcon, EnvelopeOpenIcon, GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { atom } from "jotai";
import React from "react";

export const iconsAtom = atom([
  <HomeIcon/>,
  <GearIcon/>,
  <EnvelopeOpenIcon/>,
  <ChatBubbleIcon/>
])