// See:
// https://lucia-auth.com/guidebook/sign-in-with-username-and-password/sveltekit/
import type { PageServerLoad } from './$types';
import type { Roles } from '$lib/types/user';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.auth.validate();

  return {
    userId: session?.user.userId as string,
    username: session?.user.username as string,
    role: session?.user.role as Roles,
  };
};
