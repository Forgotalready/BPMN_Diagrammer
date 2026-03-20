using BPMN.Backend.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BPMN.Backend;

public static class Program
{
        public static void Main(string[] args)
        {
                var builder = WebApplication.CreateBuilder(args);
                
                var host = Environment.GetEnvironmentVariable("POSTGRES_HOST") ?? "localhost";
                var port = Environment.GetEnvironmentVariable("POSTGRES_PORT") ?? "5432";
                var db = Environment.GetEnvironmentVariable("POSTGRES_DB") ?? "bpmn_db";
                var user = Environment.GetEnvironmentVariable("POSTGRES_USER") ?? "postgres";
                var password = Environment.GetEnvironmentVariable("POSTGRES_PASSWORD") ?? "password";

                var connectionString = $"Host={host};Port={port};Database={db};Username={user};Password={password}";
                
                builder.Services.AddDbContext<AppDbContext>(options =>
                                options.UseNpgsql(connectionString)
                );
                
                var app = builder.Build();

                app.MapGet("/", async (AppDbContext db) =>
                {
                        var elements = await db.Elements.ToListAsync();
                        return Results.Json(elements);
                });

                app.Run();
        }
}