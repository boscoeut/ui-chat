import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface ComboboxProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <div className="flex flex-col">
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                "flex items-center px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground",
                value === option.value && "bg-accent text-accent-foreground"
              )}
              onClick={() => {
                onValueChange?.(option.value)
                setOpen(false)
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === option.value ? "opacity-100" : "opacity-0"
                )}
              />
              {option.label}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
} 