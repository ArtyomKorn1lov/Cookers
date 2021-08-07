using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cookers.Dto;

namespace Cookers.Controllers
{
    [Route( "api/[controller]" )]
    [ApiController]
    public class RecipesController : Controller
    {
        private RecipesRepository repository = new RecipesRepository();

        [HttpGet]
        public IEnumerable<RecipeDto> Get()
        {
            return repository.GetAll();
        }
    }
}
