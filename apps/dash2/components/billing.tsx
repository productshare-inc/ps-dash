import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function BillingComponent() {
  const [activeTab, setActiveTab] = useState("billing");

  return (
    <div className="flex-1 p-6 mt-0 lg:mt-10">
      <div className="flex justify-start m-10 lg:m-0 ml-20 lg:ml-0">
        <Button onClick={() => window.location.href = "https://billing.stripe.com/p/login/7sI4hz7SRau8e1WfYY"}>Manage Billing</Button>
      </div>
    </div>
  );
}

export default BillingComponent;
