import React, { useState } from "react";
import Card from "../common/Card";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function CreateWidget() {
  const [msg, setMsg] = useState('a')
  const create = () => {
    console.log('create')
    if (msg === 'a') {
      setMsg('b')
    } else {
      setMsg('a')
    }
  }
  return (
    <Card >
      <PlusCircledIcon onClick={create} className="w-1/3 h-1/3"/>
      {msg}
    </Card>
  )
}