import { Field, Label } from '@/components/fieldset'
import { Input } from '@/components/input'
import { Switch } from '@/components/switch'
import Link from 'next/link'


export default function Page() {
  return (
    <>

      <div className="flex h-[100vh] flex-col justify-center">
        <div className="mx-auto w-full max-w-[509px] rounded-md border border-slate-200 bg-white p-[30px]">
          <h3 className="mb-5 text-lg/7 font-semibold tracking-[-0.015em] text-zinc-950 sm:text-base/7 dark:text-white">
            Sign in
          </h3>
          <form action="">
            <div className="flex flex-col gap-[15px]">
              <Field>
                <Label>Full name</Label>
                <Input name="" type="text" />
              </Field>
              <Field>
                <Label>Password</Label>
                <Input name="" type="password" />
              </Field>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch name="allow_embedding" defaultChecked />
                  <p className="text-[14px] text-black">Remember me</p>
                </div>
                <div>
                  <Link
                    href="/"
                    className="font-semibold text-zinc-950 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <button type="submit" className="rounded-md bg-black px-[20px] py-[10px] text-white text-[14px]">
                Log in
              </button>
              <button type="submit" className="rounded-md bg-black px-[20px] py-[10px] text-white text-[14px]">
                Sign in with Google
              </button>
              <p className="text-[14px] text-slate-500">Don't have an account? <Link href="/" className="text-black">Sign up </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
   
    </>
  )
}
