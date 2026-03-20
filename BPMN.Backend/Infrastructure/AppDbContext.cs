using BPMN.Backend.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;

namespace BPMN.Backend.Infrastructure;

public class AppDbContext : DbContext
{
        public AppDbContext(DbContextOptions<AppDbContext> options)
                : base(options)
        {
        }

        public DbSet<ElementEntity> Elements { get; set; } = null!;
        public DbSet<EventEntity> Events { get; set; } = null!;
        public DbSet<TaskEntity> Tasks { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
                base.OnModelCreating(modelBuilder);

                modelBuilder.Entity<SequenceFlowEntity>()
                                .HasKey(sf => new { sf.SourceElementId, sf.TargetElementId });
                modelBuilder.Entity<TaskEntity>()
                                .HasOne(t => t.Element)
                                .WithOne()
                                .HasForeignKey<TaskEntity>(t => t.ElementId);
                
                modelBuilder.Entity<EventEntity>()
                                .HasOne(t => t.Element)
                                .WithOne()
                                .HasForeignKey<EventEntity>(t => t.ElementId);
                
                modelBuilder.Entity<DiagramElementEntity>()
                                .HasOne(t => t.Element)
                                .WithOne()
                                .HasForeignKey<DiagramElementEntity>(t => t.ElementId);
        }
}