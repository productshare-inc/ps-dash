import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function DetailsComponent() {
  return (
    <form className="space-y-4 py-10 ml-2 mt-9">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-bold text-gray-700 dark:text-white"
        >
          Enter your name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-9"
        />
      </div>
      <Button type="submit" className="h-9">
        Save
      </Button>
    </form>
  );
}

export default DetailsComponent;
