namespace BPMN.Backend.Domain;

public abstract class FlowNode
{
        public long Id { get; }
        public FlowNode? Parent { get; }

        public FlowNode(long id, FlowNode? parent)
        {
                Id = id;
                Parent = parent;
        }
}