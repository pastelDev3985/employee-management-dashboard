import { Button } from "../ui/button"
import { Field } from "../ui/field"
import { Input } from "../ui/input"

export function AddEmployee() {
  return (
    <Field orientation="horizontal" className="my-4 w-1/2 flex items-center justify-start gap-2">
      <Input type="search" placeholder="Search..." className="w-full"/>
      <Button>Search</Button>
    </Field>
  )
}
