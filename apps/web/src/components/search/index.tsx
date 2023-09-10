"use client";

import {useRef, useState} from "react";

import { SearchButton } from "@/components/search/button";
import { SearchForm } from "@/components/search/form";

export function Search() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const childInputRef = useRef<HTMLInputElement>();
  const [searchQuery, setSearchQuery] = useState("");

  const focusChild:() => void  = () => {
      console.log('*********', searchIsOpen);
      if(!searchIsOpen) {
          setSearchIsOpen(true)
          // console.log('IOPEN', searchIsOpen);
          childInputRef?.current && childInputRef?.current?.focus()
      }
      else {
          setSearchIsOpen(false)
          // console.log('CLOSE', searchIsOpen);
      }
  }

  return (
    <div className="relative grid w-full items-center" tabIndex={-1}>
      <SearchForm isOpen={searchIsOpen} setSearchIsOpen={setSearchIsOpen} childInputRef={childInputRef} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <SearchButton isOpen={searchIsOpen} onClick={focusChild} setSearchIsOpen={setSearchIsOpen} type={searchIsOpen && searchQuery.length > 0 ? "submit" : "button"}/>
    </div>
  );
}
