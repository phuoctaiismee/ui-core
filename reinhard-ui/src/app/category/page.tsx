"use client";
import {
  setCategories,
  useGetListCategoriesQuery,
} from "@/stores/features/categories";
import { Loader } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const CategoryPage = () => {
  const { data, isLoading } = useGetListCategoriesQuery({ query: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setCategories(data[0]));
    }
  }, [data]);
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {isLoading ? <Loader /> : <>{JSON.stringify(data)}</>}
    </div>
  );
};

export default CategoryPage;
