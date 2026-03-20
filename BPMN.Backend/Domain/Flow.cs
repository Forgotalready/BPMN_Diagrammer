namespace BPMN.Backend.Domain;

public class Flow
{
        public long SourceId { get; }
        public long TargetId { get; }
        public string? Condition { get; }
        public bool IsDefault { get; }

        public Flow(long sourceId, long targetId, string? condition, bool isDefault = false)
        {
                SourceId = sourceId;
                TargetId = targetId;
                Condition = condition;
                IsDefault = isDefault;
        }
}