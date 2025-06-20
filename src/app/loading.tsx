import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
	return (
		<div className="flex h-screen items-center justify-center">
			<Spinner size="large" />
		</div>
	);
} 