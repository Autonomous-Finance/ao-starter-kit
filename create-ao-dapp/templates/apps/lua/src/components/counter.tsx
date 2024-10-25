import {
    createDataItemSigner,
    dryrun,
    message,
    result,
} from "@permaweb/aoconnect";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import COUNTER from "../constants/counter_process";

export default function Counter() {
	const queryClient = useQueryClient();

	const {
		data: counter,
		error,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["counter"],
		queryFn: async () => {
			const dryrunResult = await dryrun({
				process: COUNTER,
				tags: [
					{
						name: "Action",
						value: "Info",
					},
				],
			});

			if (dryrunResult.Messages[0].Data) {
				return JSON.parse(dryrunResult.Messages[0].Data);
			}

			return undefined;
		},
	});

	const increaseCounter = useMutation({
		mutationKey: ["IncreaseCounter"],
		mutationFn: async () => {
			const messageId = await message({
				process: COUNTER,
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
				process: COUNTER,
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
				process: COUNTER,
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
				process: COUNTER,
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

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				alignItems: "center",
			}}
		>
			<h2>
				Counter:{" "}
				<span>{isLoading || isFetching ? "Loading..." : counter ?? "N/A"}</span>
			</h2>
			<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
				<button
					type="button"
					disabled={increaseCounter.isPending}
					onClick={() => increaseCounter.mutateAsync()}
				>
					+1
				</button>
				<button
					type="button"
					disabled={resetCounter.isPending}
					onClick={() => resetCounter.mutateAsync()}
				>
					Reset
				</button>
			</div>
		</div>
	);
}