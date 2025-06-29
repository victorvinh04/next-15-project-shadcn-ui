import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function PresetSave() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='secondary'>Save</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save preset</DialogTitle>
          <DialogDescription>
            This will save the current playground state as a preset which you
            can access later or share with others.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-6 py-4'>
          <div className='grid gap-3'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' autoFocus />
          </div>
          <div className='grid gap-3'>
            <Label htmlFor='description'>Description</Label>
            <Textarea id='description' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
