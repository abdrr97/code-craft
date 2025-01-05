'use server'

import { currentUser } from '@clerk/nextjs/server'
import { ConvexHttpClient } from 'convex/browser'
import { redirect, RedirectType } from 'next/navigation'
import { api } from '../../../../convex/_generated/api'

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export const upgrade = async () => {
  const user = await currentUser()

  if (!user) return null

  await convex.mutation(api.users.upgradeToPro, {
    email: user?.emailAddresses[0].emailAddress || '',
    amount: 39,
    lemonSqueezyCustomerId: '',
    lemonSqueezyOrderId: '',
  })

  return redirect('/', RedirectType.replace)
}
