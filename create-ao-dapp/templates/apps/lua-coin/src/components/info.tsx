import {
	createDataItemSigner,
	dryrun,
	message,
	result,
} from "@permaweb/aoconnect";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import COIN from "../constants/coin_process";
import { CurveInfo } from "../types/curve";

export default function Info() {
	const queryClient = useQueryClient();

	const {
		data: curveInfo,
		error,
		isLoading,
	} = useQuery<CurveInfo>({
		queryKey: ["curveInfo"],
		queryFn: async () => {
			const dryrunResult = await dryrun({
				process: COIN,
				tags: [
					{
						name: "Action",
						value: "Info",
					},
				],
			});

			if (dryrunResult.Messages[0].Tags) {
				return dryrunResult.Messages[0].Tags.reduce((acc, tag) => ({
					...acc,
					[tag.name]: tag.value
				}), {}) as CurveInfo;
			}

			return undefined;
		},
	});

	const increaseCounter = useMutation({
		mutationKey: ["IncreaseCounter"],
		mutationFn: async () => {
			const messageId = await message({
				process: COIN,
				tags: [
					{
						name: "Action",
						value: "IncreaseCounter",
					},
				],
				data: "",
				signer: createDataItemSigner(window.arweaveWallet),
			});

			const messageResult = await result({
				process: COIN,
				message: messageId,
			});

			if (messageResult.Messages[0].Data) {
				return JSON.parse(messageResult.Messages[0].Data);
			}

			return undefined;
		},
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	const resetCounter = useMutation({
		mutationKey: ["ResetCounter"],
		mutationFn: async () => {
			const messageId = await message({
				process: COIN,
				tags: [
					{
						name: "Action",
						value: "ResetCounter",
					},
				],
				data: "",
				signer: createDataItemSigner(window.arweaveWallet),
			});

			const messageResult = await result({
				process: COIN,
				message: messageId,
			});

			if (messageResult.Messages[0].Data) {
				return JSON.parse(messageResult.Messages[0].Data);
			}

			return undefined;
		},
		onSuccess: () => {
			queryClient.invalidateQueries();
		},
	});

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="p-4 max-w-7xl mx-auto">
			<h2 className="text-2xl font-bold mb-6 text-gray-800">Curve Information</h2>

			{/* Main Stats */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm">
					<h3 className="text-lg font-semibold text-blue-900 mb-2">Current Price</h3>
					<p className="text-3xl font-bold text-blue-700">{curveInfo?.['Curve-Price'] ?? '0'}</p>
				</div>
				<div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm">
					<h3 className="text-lg font-semibold text-green-900 mb-2">Total Supply</h3>
					<p className="text-3xl font-bold text-green-700">{curveInfo?.['Curve-Supply'] ?? '0'}</p>
				</div>
				<div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm">
					<h3 className="text-lg font-semibold text-purple-900 mb-2">Reserve</h3>
					<p className="text-3xl font-bold text-purple-700">{curveInfo?.['Curve-Reserve'] ?? '0'}</p>
				</div>
			</div>

			{/* Curve Parameters */}
			<div className="mb-8">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">Curve Parameters</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{curveInfo && Object.entries(curveInfo)
						.filter(([key]) => !['Data-Protocol', 'Variant', 'Type', 'Reference', 'Action'].includes(key))
						.filter(([key]) => key.startsWith('Curve-') || key.startsWith('Target-'))
						.map(([key, value]) => (
							<div
								key={key}
								className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
							>
								<div className="font-medium text-gray-700 mb-1">
									{key.split('-').join(' ')}
								</div>
								<div className="text-gray-600 font-mono text-sm break-all">
									{value ?? 'N/A'}
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Other Information */}
			<div className="mb-8">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">Additional Information</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{curveInfo && Object.entries(curveInfo)
						.filter(([key]) => !['Data-Protocol', 'Variant', 'Type', 'Reference', 'Action'].includes(key))
						.filter(([key]) => !key.startsWith('Curve-') && !key.startsWith('Target-'))
						.map(([key, value]) => (
							<div
								key={key}
								className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
							>
								<div className="font-medium text-gray-700 mb-1">
									{key.split('-').join(' ')}
								</div>
								<div className="text-gray-600 font-mono text-sm break-all">
									{value ?? 'N/A'}
								</div>
							</div>
						))}
				</div>
			</div>

			{/* Control Buttons */}
			<div className="flex gap-4 mt-6">
				<button
					type="button"
					disabled={increaseCounter.isPending}
					onClick={() => increaseCounter.mutateAsync()}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					Increase Counter
				</button>
				<button
					type="button"
					disabled={resetCounter.isPending}
					onClick={() => resetCounter.mutateAsync()}
					className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
				>
					Reset Counter
				</button>
			</div>
		</div>
	);
}