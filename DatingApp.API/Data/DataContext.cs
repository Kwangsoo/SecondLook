// using Microsoft.EntityFrameworkCore;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}

        //This 'Values' is become the table name
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}