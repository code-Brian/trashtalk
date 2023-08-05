using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TrashTalk.Models;

namespace TrashTalk.Controllers;
[ApiController]
[Route("api")]

public class MainController : ControllerBase
{
    private DBContext _context;
    private readonly ILogger<MainController> _logger;

    public MainController(ILogger<MainController> logger, DBContext context)
    {
        _logger = logger;
        _context = context;
    }

    [HttpGet("test")]
    public async Task<ActionResult<User>> Test()
    {
        User testUser = new User();
        testUser.FirstName = "Johnny";
        testUser.LastName = "Appleseed";
        testUser.Email = "jappleseed@gmail.com";
        testUser.Password = "lolnoway";
        await testUser;
        return testUser;
    }
}
