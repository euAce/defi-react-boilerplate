import { Check } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function PositionCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Delta-Neutral</CardTitle>
        <CardDescription>самая высокая доходность</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
            <p>APY: 21.2%</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full cursor-pointer" 
          onClick={() => console.log('Button clicked')}
        >
          <Check /> Add Position
        </Button>
      </CardFooter>
    </Card>
  )
}