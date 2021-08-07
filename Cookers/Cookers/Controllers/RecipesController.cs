using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Dto;

namespace Web.Controllers
{
    [Route( "api/[controller]" )] //Заглушка
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
