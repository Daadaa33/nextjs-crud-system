"use client"
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,  
} from "@/components/ui/form";
import { CardWrapper } from "@/components/ui/card-wrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Loginform2 = () => {
  return (
    <CardWrapper
    headerLabel="Welcome back"
    backButtonLabel="Don't have an account?"
    backButtonHref="/auth/register"
    showSocial
  >
    <Form >
      <form 
        // onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
              <FormField
                // control={form.control}
                name="email"
                // render={({ field }) => (
                //         )}
                        >
                            
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        // {...field}
                        // disabled={isPending}
                        placeholder="john.doe@example.com"
                        type="email"
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                        </FormField>
              <FormField
                // control={form.control}
                name="password"
                // render={({ field }) => (
                //         )}
                      />
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        // {...field}
                        // disabled={isPending}
                        placeholder="******"
                        type="password"
                      />
                    </FormControl>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="px-0 font-normal"
                    >
                      <Link href="/auth/reset">
                        Forgot password?
                      </Link>
                    </Button>
                    <FormMessage />
                  </FormItem>
          {/* </> */}
        </div>
        {/* <FormError message={error || urlError} /> */}
        {/* <FormSuccess message={success} /> */}
        <Button
        //   disabled={isPending}
          type="submit"
          className="w-full"
        >
            Login
          {/* {showTwoFactor ? "Confirm" : "Login"} */}
        </Button>
      </form>
    </Form>
  </CardWrapper>  
  )
}

export default Loginform2