namespace BPMN.Backend.Infrastructure.Entities;

using System.ComponentModel.DataAnnotations.Schema;

[Table("sequence_flows")]
public class SequenceFlowEntity
{
        [Column("source_element_id")] public long SourceElementId { get; set; }

        [ForeignKey("SourceElementId")] public ElementEntity SourceElement { get; set; } = null!;

        [Column("target_element_id")] public long TargetElementId { get; set; }

        [ForeignKey("TargetElementId")] public ElementEntity TargetElement { get; set; } = null!;

        [Column("condition_expression")] public string? ConditionExpression { get; set; }

        [Column("is_default")] public bool IsDefault { get; set; } = false;
}