import type {FlowNode} from "./FlowNode";
import type {Flow} from "./Flow";


export class BPMNElementsRegistry {
        private readonly _nodes = new Map<number, FlowNode>();
        private readonly _flows = new Map<number, Flow>();

        getNodeById = (id: number): FlowNode => {
                return this._nodes.get(id) ??
                    (() => {
                            throw new Error(`Node ${id} not found`)
                    })();
        }

        getFlowById = (id: number): Flow => {
                return this._flows.get(id) ??
                    (() => {
                            throw new Error(`Flow ${id} not found`)
                    })();
        }

        addNode = (flowNode: FlowNode): void => {
                this._nodes.set(flowNode.id, flowNode);
        }

        addFlow = (flow: Flow): void => {
                this._flows.set(flow.id, flow);
        }

        toJson = (): string => {
                return JSON.stringify(this);
        }

        toJSON() {
                return {
                        nodes: Array.from(this._nodes.entries()),
                        flows: Array.from(this._flows.entries()),

                        metadata: {
                                nodeCount: this._nodes.size,
                                flowCount: this._flows.size,
                                version: '1.0.0'
                        }
                };
        }

        public static fromJson = (json: string): BPMNElementsRegistry => {
                const parsed = JSON.parse(json);
                const registry = new BPMNElementsRegistry();

                if (parsed.nodes && Array.isArray(parsed.nodes)) {
                        parsed.nodes.forEach((item: any) => {
                                const [id, nodeData] = item;

                                const flowNode: FlowNode = {
                                        id,
                                        ...nodeData
                                };

                                registry.addNode(flowNode);
                        });
                }

                if (parsed.flows && Array.isArray(parsed.flows)) {
                        parsed.flows.forEach((item: any) => {
                                const [id, flowData] = item;

                                const flow: Flow = {
                                        id,
                                        ...flowData
                                };

                                registry.addFlow(flow);
                        });
                }

                return registry;
        }
}
