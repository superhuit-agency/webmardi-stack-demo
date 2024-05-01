import { draftMode } from 'next/headers';
import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(request: NextRequest) {
	const path = request.nextUrl.searchParams.get('redirect') ?? '/';

	draftMode().disable();

	const url = `/${path ? path.replace(/\//, '') : ''}`;

	return redirect(url);
}
