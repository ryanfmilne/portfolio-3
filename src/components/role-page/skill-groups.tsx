import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { RoleListSection } from '@/types'

export function SkillGroups({ groups }: { groups: RoleListSection[] }) {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {groups.map((group) => (
        <Card key={group.title} className='border shadow'>
          <CardHeader className='p-4'>
            <CardTitle className='text-xl text-neutral-900 dark:text-neutral-100'>
              {group.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2 p-4 pt-0'>
            {group.items.map((item) => (
              <Badge key={item} variant='secondary' className='rounded-md shadow'>
                {item}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
