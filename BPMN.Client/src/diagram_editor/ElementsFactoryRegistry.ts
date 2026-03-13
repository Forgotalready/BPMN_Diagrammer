import type {FlowNode} from "../domain/bpmn/FlowNode.ts";

type ElementFactory = (props: any) => FlowNode;

export class ElementsFactoryRegistry{
        private static _factories = new Map<string, ElementFactory>();

        public static registerFactory(type: string, element: ElementFactory){
                this._factories.set(type, element);
        }

        public static create(type: string, props: any): FlowNode{
                return this._factories.get(type)?.call(null, props)!
        }
}

export function RegisterFactory(type: string) {
        return function (target: any) {

                const factory: any = new target();

                ElementsFactoryRegistry.registerFactory(
                    type,
                    (props) => factory.create(props)
                );

        };
}