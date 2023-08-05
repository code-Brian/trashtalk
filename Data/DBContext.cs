#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;

namespace TrashTalk.Models;
public class DBContext : DbContext
{
    public DBContext(DbContextOptions options) : base(options) {}
    public DbSet<DBContext> Users { get; set; }
}