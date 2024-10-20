import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import React from "react";
import { Terminal } from "lucide-react";

const page = () => {
  return (
    <div className="grid gap-3">
      <h1>Alert page</h1>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default page;
