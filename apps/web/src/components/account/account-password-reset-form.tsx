import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@uncnsrdlabel/components/atoms/card";
import { Input } from "@uncnsrdlabel/components/atoms/input";
import { Label } from "@uncnsrdlabel/components/atoms/label";

export function AccountPasswordResetForm({
  className,
}: React.HTMLAttributes<typeof Card>) {
  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Reset your password</CardTitle>
        <CardDescription>
          Enter your email below to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="me@example.com" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Reset password</Button>
      </CardFooter>
    </Card>
  );
}
