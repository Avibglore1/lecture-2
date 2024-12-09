
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home(){
return (
  <div className="flex flex-col justify-center items-center gap-20">
      <Card>
        <CardHeader>
          <CardTitle>LogIn Page</CardTitle>
          <CardDescription>Enter your credential</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Login</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Badge variant = 'secondary' className='h-10 w-24'></Badge>
      <Button variant = 'outline'  size='sm'>Hellothere</Button>
  </div>
  
)
}






