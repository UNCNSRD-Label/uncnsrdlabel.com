import { Button } from "../atoms/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../atoms/card";
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";

export function AccountRecoverForm({
  className,
}: React.HTMLAttributes<typeof Card>) {
  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Recover your account</CardTitle>
        <CardDescription>
          Enter your email below to recover your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="me@example.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Recover account</Button>
      </CardFooter>
    </Card>
  );
}
