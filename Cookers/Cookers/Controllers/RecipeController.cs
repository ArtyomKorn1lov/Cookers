using Application;
using Application.Services;
using Domain.Entity;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Web.Dto;
using Web.DtoConverter;

namespace Web.Controllers
{
    [Route( "api/[controller]" )]
    [ApiController]
    public class RecipeController : Controller
    {
        private IUnitOfWork _unitOfWork;
        private IRecipeService _recipeService;
        private const int _recipesCount = 3;

        public RecipeController( IUnitOfWork unitOfWork, IRecipeService recipeService )
        {
            _unitOfWork = unitOfWork;
            _recipeService = recipeService;
        }

        [HttpGet( "сount" )]
        public List<RecipeDto> GetSeveralRecipes()
        {
            List<Recipe> recipes = _recipeService.GetLastCount( _recipesCount );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "by-name" )]
        public List<RecipeDto> GetByName( string name )
        {
            List<Recipe> recipes = _recipeService.GetByName( name );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "tag" )]
        public List<RecipeDto> GetRecipeByTag( string tag )
        {
            List<Recipe> recipes = _recipeService.GetRecipeByTag( tag );
            return recipes.Select( r => RecipeDtoConverter.ConvertToRecipeDto( r ) ).ToList();
        }

        [HttpGet( "day" )]
        public RecipeDto RecipeOfDay()
        {
            Recipe recipe = _recipeService.RecipeOfDay();
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpGet( "id" )]
        public RecipeDto GetRecipeById( int id )
        {
            Recipe recipe = _recipeService.Get( id );
            return RecipeDtoConverter.ConvertToRecipeDto( recipe );
        }

        [HttpPost]
        public void CreateRecipe( RecipeDto recipeDto )
        {
            Recipe recipe = RecipeDtoConverter.ConvertToRecipeEntity( recipeDto );
            _recipeService.Create( recipe );
        }

        [HttpPut]
        public void Update( RecipeDto recipeDto )
        {
            Recipe recipe = _recipeService.Get( recipeDto.Id );
            recipe.CopyFrom( RecipeDtoConverter.ConvertToRecipeEntity( recipeDto ) );
            _unitOfWork.Commit();
        }

        [HttpDelete]
        public void DeleteRecipe( int id )
        {
            _recipeService.Delete( id );
            _unitOfWork.Commit();
        }
    }
}
