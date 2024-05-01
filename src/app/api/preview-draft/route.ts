import { NextResponse, type NextRequest } from 'next/server';

import { GET as preview } from '../preview/route';

export async function GET(request: NextRequest) {
	request.nextUrl.searchParams.set('draft', 'true');
	await preview(request);
	return NextResponse.next();
}
