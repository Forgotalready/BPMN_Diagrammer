namespace BPMN.Backend.Domain;

public sealed class EventNode : FlowNode
{
        public string EventType { get; }

        public EventNode(long id, FlowNode? parent, string eventType) : base(id, parent)
        {
                EventType = eventType;
        }
}

public class EventTypes
{
        public const string Start = "Start";
        public const string Intermediate = "Intermediate";
        public const string End = "End";
}