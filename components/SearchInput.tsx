"use client";

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What are you Looking for?"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default SearchInput;
