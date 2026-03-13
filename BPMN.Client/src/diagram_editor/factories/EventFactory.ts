import {RegisterFactory} from "../ElementsFactoryRegistry.ts";
import {Event} from "../../domain/bpmn/Event.ts";

@RegisterFactory("Event")
export class EventFactory {
        create(props: any) {
                return new Event(props.id, props.parent, props.eventType);
        }
}