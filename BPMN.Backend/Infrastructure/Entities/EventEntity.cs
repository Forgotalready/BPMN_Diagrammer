using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BPMN.Backend.Infrastructure.Entities;

[Table("events")]
public class EventEntity
{
        [Key]
        [ForeignKey("ElementId")]
        [Column("element_id")]
        public long ElementId { get; set; }

        public ElementEntity Element { get; set; } = null!;

        [Required] [Column("event_type")] public string EventType { get; set; } = null!;
}