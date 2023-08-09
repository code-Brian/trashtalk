#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;
using TrashTalk.Models;

namespace TrashTalk.Data;
public class DBContext : DbContext
{
    public DBContext(DbContextOptions options) : base(options) { }
    public DbSet<User> Users { get; set; }
}