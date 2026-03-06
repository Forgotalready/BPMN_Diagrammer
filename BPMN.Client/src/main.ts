import {BPMNElementsRegistry} from './domain/BPMNElementsRegistry';
import {EventTypes, Event as BPMNEvent} from './domain/Event';
import {Task, TaskTypes} from './domain/Task';
import './style.css'

const main = () => {
        const bpmnElements = new BPMNElementsRegistry();
        bpmnElements.addNode(new BPMNEvent(1, 100, 200, 400, 500, null, EventTypes.Start));
        bpmnElements.addNode(new Task(2, 150, 250, 400, 500, null, "Задача 1", TaskTypes.Task));
        bpmnElements.addNode(new BPMNEvent(3, 200, 300, 400, 500, null, EventTypes.End));

        document.querySelector<HTMLDivElement>('#app')!.innerHTML = bpmnElements.toJson();
}

main();
